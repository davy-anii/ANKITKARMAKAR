"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

interface TechItem {
  title: string;
  icon?: string;
}

interface BallpitProps {
  items: TechItem[];
  count?: number;
  gravity?: number;
  friction?: number;
  wallBounce?: number;
  followCursor?: boolean;
}

export default function Ballpit({
  items,
  count = 50,
  gravity = 0.5,
  friction = 0.952,
  wallBounce = 0.5,
  followCursor = false,
}: BallpitProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!sceneRef.current || !canvasRef.current) return;

    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          World = Matter.World,
          Bodies = Matter.Bodies;

    const engine = Engine.create();
    engine.gravity.y = gravity;

    const width = sceneRef.current.clientWidth || window.innerWidth;
    const height = sceneRef.current.clientHeight || 600;

    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
      }
    });

    const runner = Runner.create();

    // Floor and walls
    const wallOptions = { isStatic: true, restitution: wallBounce, render: { visible: false } };
    const ground = Bodies.rectangle(width / 2, height + 25, width * 2, 50, wallOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height * 2, wallOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height * 2, wallOptions);
    const roof = Bodies.rectangle(width / 2, -1000, width * 2, 50, wallOptions);
    World.add(engine.world, [ground, leftWall, rightWall, roof]);

    // Preload Images
    const imageCache: { [key: string]: HTMLImageElement } = {};
    items.forEach(item => {
      if (item.icon) {
        const img = new Image();
        img.src = item.icon;
        imageCache[item.title] = img;
      }
    });

    // Create Balls
    const balls = [];
    for (let i = 0; i < Math.max(count, items.length); i++) {
      const isTech = i < items.length;
      const tech = isTech ? items[i] : null;
      const text = tech ? tech.title : "";
      const hasIcon = !!(tech && tech.icon);
      
      const radius = isTech ? 26 : (Math.random() * 10 + 10);
      
      const x = Math.random() * (width - 100) + 50;
      const y = Math.random() * -500 - 50;

      const ball = Bodies.circle(x, y, radius, {
        restitution: 0.7,
        frictionAir: 1 - friction,
        friction: 0.01,
        render: {
          fillStyle: "transparent",
        },
        plugin: {
          text: text,
          hasIcon: hasIcon,
          title: text,
          radius: radius,
          color: text ? "#00f0ff" : ["#00f0ff44", "#8a2be244", "#050510aa"][Math.floor(Math.random() * 3)],
        }
      });
      balls.push(ball);
    }
    World.add(engine.world, balls);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.1,
        render: {
          visible: false
        }
      }
    });

    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    let mx = width / 2;
    let my = height / 2;
    if (followCursor) {
      window.addEventListener("mousemove", (e) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
          mx = e.clientX - rect.left;
          my = e.clientY - rect.top;
        }
      });
    }

    Matter.Events.on(render, "afterRender", () => {
      const context = render.context;
      
      engine.world.bodies.forEach((body) => {
        if (!body.plugin || !body.plugin.radius) return;

        const isText = body.plugin.text !== "";
        const hasIcon = body.plugin.hasIcon;
        const title = body.plugin.title;
        const img = imageCache[title];

        context.save();
        context.translate(body.position.x, body.position.y);
        context.rotate(body.angle);

        if (isText) {
          if (hasIcon && img && img.complete && img.naturalWidth > 0) {
            // Enhanced 3D Bubble rendering
            context.shadowBlur = 12;
            context.shadowColor = "rgba(0, 0, 0, 0.4)";
            
            context.beginPath();
            context.arc(0, 0, body.plugin.radius, 0, 2 * Math.PI);
            context.fillStyle = "#ffffff"; 
            context.fill();
            
            context.shadowBlur = 0; // Reset for crisp icon drawing
            context.lineWidth = 1;
            context.strokeStyle = "rgba(0,0,0,0.1)";
            context.stroke();
            
            const size = body.plugin.radius * 1.35; 
            context.drawImage(img, -size/2, -size/2, size, size);
          } else {
            // Draw Text Bubble
            context.beginPath();
            context.arc(0, 0, body.plugin.radius, 0, 2 * Math.PI);
            context.fillStyle = "rgba(10,10,20,0.8)";
            context.fill();
            context.lineWidth = 2;
            context.strokeStyle = body.plugin.color;
            context.stroke();
            
            context.shadowBlur = 0;
            context.fillStyle = "#fff";
            context.textAlign = "center";
            context.textBaseline = "middle";
            const text = body.plugin.text;
            const words = text.split(" ");
            
            if (words.length > 1) {
               context.font = "bold 11px Arial, sans-serif";
               context.fillText(words[0], 0, -6);
               context.fillText(words.slice(1).join(" "), 0, 6);
            } else {
               context.font = "bold 12px Arial, sans-serif";
               context.fillText(text, 0, 0);
            }
          }
        } else {
          // Decorative balls
          context.beginPath();
          context.arc(0, 0, body.plugin.radius, 0, 2 * Math.PI);
          context.fillStyle = body.plugin.color;
          context.fill();
        }

        context.restore();

        if (followCursor && !body.isStatic) {
          const forceMagnitude = 0.0001;
          Matter.Body.applyForce(body, body.position, {
            x: (mx - body.position.x) * forceMagnitude,
            y: (my - body.position.y) * forceMagnitude
          });
        }
      });
    });

    Runner.run(runner, engine);
    Render.run(render);

    const handleResize = () => {
      if (!sceneRef.current) return;
      const w = sceneRef.current.clientWidth;
      const h = sceneRef.current.clientHeight;
      render.canvas.width = w;
      render.canvas.height = h;
      render.options.width = w;
      render.options.height = h;
      Matter.Body.setPosition(ground, { x: w / 2, y: h + 25 });
      Matter.Body.setPosition(rightWall, { x: w + 25, y: h / 2 });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [items, count, gravity, friction, wallBounce, followCursor]);

  return (
    <div ref={sceneRef} className="w-full h-full relative overflow-hidden rounded-3xl border border-white/10 glass shadow-[0_0_40px_rgba(138,43,226,0.1)]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
