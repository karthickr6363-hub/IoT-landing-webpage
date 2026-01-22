import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Activity, Users, AlertTriangle, TrendingUp, Battery, Thermometer, Droplets, Wind } from "lucide-react";

const DashboardPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const stats = [
    { icon: Activity, label: "Active Devices", value: "12,847", trend: "+12%", color: "text-cyan-400" },
    { icon: Users, label: "Connected Users", value: "3,892", trend: "+8%", color: "text-purple-400" },
    { icon: AlertTriangle, label: "Alerts Today", value: "23", trend: "-15%", color: "text-orange-400" },
    { icon: TrendingUp, label: "Data Points", value: "1.2M", trend: "+24%", color: "text-green-400" },
  ];

  const sensorData = [
    { icon: Battery, label: "Battery", value: "87%", status: "good" },
    { icon: Thermometer, label: "Temperature", value: "23°C", status: "good" },
    { icon: Droplets, label: "Humidity", value: "65%", status: "warning" },
    { icon: Wind, label: "Air Quality", value: "Good", status: "good" },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Dashboard</span>
          <h2 className="section-title mt-4">
            Powerful <span className="gradient-text">Insights at a Glance</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our intuitive dashboard puts complete visibility and control at your fingertips 
            with real-time analytics and customizable views.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          style={{ y }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Dashboard Container */}
          <div className="glass-card rounded-3xl p-6 relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-50" />
            
            <div className="relative bg-card rounded-2xl p-6 overflow-hidden">
              {/* Top Bar */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-between mb-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold font-display">N</span>
                  </div>
                  <div>
                    <div className="font-semibold">NexusIoT Dashboard</div>
                    <div className="text-xs text-muted-foreground">Last updated: Just now</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-green-400">Live</span>
                </div>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="glass-card p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      <span className="text-xs text-muted-foreground">{stat.label}</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <span className="text-2xl font-bold">{stat.value}</span>
                      <span className={`text-xs ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-orange-400'}`}>
                        {stat.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Charts Row */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Main Chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="lg:col-span-2 glass-card p-4 rounded-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold">Device Activity</span>
                    <div className="flex gap-2">
                      {["1H", "24H", "7D", "30D"].map((period) => (
                        <button
                          key={period}
                          className={`px-2 py-1 rounded text-xs ${period === "24H" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"}`}
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Animated Chart */}
                  <div className="h-48 flex items-end gap-2">
                    {[35, 45, 30, 60, 75, 55, 80, 70, 90, 65, 85, 95, 75, 88, 92, 78, 85, 70, 88, 95].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${height}%` } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.03 }}
                        className="flex-1 bg-gradient-to-t from-primary/60 to-primary rounded-t"
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Sensor Panel */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="glass-card p-4 rounded-xl"
                >
                  <span className="font-semibold mb-4 block">Sensor Status</span>
                  <div className="space-y-3">
                    {sensorData.map((sensor, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <sensor.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm">{sensor.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{sensor.value}</span>
                          <div className={`w-2 h-2 rounded-full ${sensor.status === 'good' ? 'bg-green-500' : 'bg-orange-500'}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating Alert Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -left-4 top-1/3 glass-card p-4 rounded-xl max-w-xs hidden lg:block"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <div className="text-sm font-semibold">Maintenance Alert</div>
                <div className="text-xs text-muted-foreground">Sensor #4521 requires calibration</div>
              </div>
            </div>
          </motion.div>

          {/* Floating Success Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -right-4 bottom-1/4 glass-card p-4 rounded-xl hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-green-400">+24.5%</div>
                <div className="text-xs text-muted-foreground">Efficiency gain</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
