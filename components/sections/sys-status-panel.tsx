"use client";

import { useEffect, useState } from "react";
import { siteConfig, sysStatusSkills } from "@/data/portfolio";

function formatUptime(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function SysStatusPanel() {
  const [uptime, setUptime] = useState(0);
  const [bars, setBars] = useState(sysStatusSkills.map(() => 0));
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const start = Date.now();
    const uptimeTimer = setInterval(() => {
      setUptime(Math.floor((Date.now() - start) / 1000));
    }, 1000);

    const barTimer = setTimeout(() => {
      setBars(sysStatusSkills.map((s) => s.value));
    }, 300);

    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      clearInterval(uptimeTimer);
      clearTimeout(barTimer);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="hidden md:block relative h-[500px] w-full border border-border/30 bg-card/10 backdrop-blur-sm p-8">
      <div className="absolute top-0 left-0 size-4 border-t-2 border-l-2 border-primary" />
      <div className="absolute top-0 right-0 size-4 border-t-2 border-r-2 border-primary" />
      <div className="absolute bottom-0 left-0 size-4 border-b-2 border-l-2 border-primary" />
      <div className="absolute bottom-0 right-0 size-4 border-b-2 border-r-2 border-primary" />

      <div className="h-full w-full flex flex-col justify-between font-mono text-xs text-muted-foreground">
        <div className="flex justify-between items-center gap-4">
          <span className="flex items-center gap-2">
            <span
              className={`size-2 rounded-full ${online ? "bg-primary animate-pulse" : "bg-secondary"}`}
            />
            SYS.STATUS: {online ? "ONLINE" : "OFFLINE"}
          </span>
          <span>UPTIME: {formatUptime(uptime)}</span>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-[10px]">
            <div className="border border-border/50 p-3 bg-background/50">
              <span className="block text-muted-foreground">ROLE</span>
              <span className="text-foreground font-bold">FULL_STACK</span>
            </div>
            <div className="border border-border/50 p-3 bg-background/50">
              <span className="block text-muted-foreground">LOCATION</span>
              <span className="text-foreground font-bold">SURAT_IN</span>
            </div>
          </div>

          {sysStatusSkills.map((skill, index) => (
            <div key={skill.label} className="space-y-2">
              <div className="h-1 w-full bg-secondary overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-1000 ease-out"
                  style={{ width: `${bars[index]}%` }}
                />
              </div>
              <div className="flex justify-between">
                <span>{skill.label}</span>
                <span>{bars[index]}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 items-end">
          <div>
            <span className="block text-4xl font-bold text-foreground">
              {siteConfig.projectCountDisplay}
            </span>
            <span>PROJECTS</span>
          </div>
          <div className="text-right">
            <span className="block text-4xl font-bold text-primary">
              {siteConfig.experienceYears}
            </span>
            <span>YEARS_EXP</span>
          </div>
        </div>
      </div>
    </div>
  );
}
