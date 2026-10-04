import { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Divider,
  Typography,
  Paper,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import DownloadIcon from "@mui/icons-material/Download";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import BrushRoundedIcon from "@mui/icons-material/BrushRounded";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CloudDoneRoundedIcon from "@mui/icons-material/CloudDoneRounded";
const resumeUrl = `${import.meta.env.BASE_URL}Abhijit_Prakash_Gawankar_Senior_Software_Engineer.pdf`;
const skills = {
  Frontend: [
    "React.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "Next.js",
    "HTML5",
    "CSS3",
    "SCSS",
    "Material UI",
    "React Bootstrap",
  ],
  "State & Architecture": [
    "Redux",
    "Redux Toolkit",
    "Context API",
    "Reusable components",
    "Modular architecture",
    "API-driven UI",
  ],
  "Backend & Integration": [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Authentication",
    "Authorization",
    "Asynchronous workflows",
  ],
  "Maps & Performance": [
    "Mapbox GL",
    "GeoJSON",
    "Real-time telemetry",
    "Large-data rendering",
    "Viewport filtering",
    "Zoom-based sampling",
    "Distance reduction",
    "Web Workers",
    "Performance profiling",
  ],
  "DevOps & Cloud": [
    "CI/CD (Azure DevOps)",
    "Docker",
    "Containerized builds",
    "Azure",
  ],
  "AI-Driven Development": [
    "GitHub Copilot",
    "ChatGPT",
    "Claude",
    "AI-assisted refactoring",
    "AI-assisted testing",
  ],
  "Design-to-Code": ["Figma", "Adobe XD", "Adobe Photoshop", "Responsive UI"],
  "Tools & Delivery": [
    "Git",
    "npm",
    "Jira",
    "Agile / Scrum",
    "Code reviews",
    "Production support",
  ],
};
const domains = [
  "E-commerce",
  "Healthcare (Medical Records)",
  "Enterprise HR Platforms",
  "Security & Autonomous Systems",
];
const experiences = [
  {
    company: "ARES Safety Solutions Pvt Ltd (ARES Security Corporation)",
    role: "Senior Software Engineer",
    location: "Remote",
    period: "Sep 2022 – Present",
    intro:
      "Enterprise security and safety platform supporting operational workflows, digital-twin capabilities and map-based visualization.",
    highlights: [
      "Engineer real-time web interfaces for robot control and mission management using React.js, Material UI, Redux and Mapbox GL, enabling operators to monitor and control autonomous systems through real-time telemetry.",
      "Engineer Mapbox-based geospatial visualization handling 80K+ track-history points; designed a 4-stage processing pipeline — viewport filtering, zoom-aware sampling, movement filtering and distance-based reduction — to cut unnecessary rendering workload and keep large-scale maps responsive.",
      "Diagnosed a “Page Unresponsive” crash caused by synchronous heavy computation on the main thread and resolved it by offloading track-history distance calculations to a Web Worker, eliminating browser freezes during large-dataset rendering.",
      "Solved a data-accuracy issue in multi-segment track-history rendering — where off-screen point filtering created false line connections across real gaps — by introducing a boundary-aware flag into the rendering pipeline.",
      "Fixed critical reliability bugs in the robot camera-control interface, including video-widget resets and resize/fill issues on camera switch, by resolving component state race conditions and improving resize handling.",
      "Architect Redux-driven state management for object-detection workflows and mission-critical UI, enabling low-latency updates and improved operational usability.",
      "Build reusable React components, utilities and common UI patterns used across multiple business modules, improving consistency and maintainability.",
      "Translate Figma designs into responsive, pixel-accurate React interfaces, working with UI/UX designers through design handoff to keep components consistent with the design system.",
      "Work with CI/CD pipelines on Azure DevOps and Docker-based builds to deliver frontend releases reliably across development, staging and production environments.",
      "Apply AI-driven development practices — GitHub Copilot, ChatGPT and Claude for scaffolding, refactoring, debugging and test generation — while maintaining code quality through review and testing.",
      "Own frontend features end-to-end — from requirement analysis and solution design through development, testing, demonstrations and production support — across authentication, transactions, approvals and role-based operations.",
    ],
    stack: [
      "React.js",
      "JavaScript",
      "Redux",
      "Material UI",
      "SCSS",
      "Node.js",
      "REST APIs",
      "Mapbox GL",
      "Docker",
      "Azure DevOps",
      "Figma",
    ],
  },
  {
    company: "IBM India Pvt Ltd",
    role: "Experience Application Developer",
    location: "Remote",
    period: "Sep 2021 – Sep 2022",
    client: "PayPal India",
    intro:
      "BRIDGE — enterprise employee platform for HR procedures, company news, announcements, events, training, nominations, profiles and team connectivity.",
    highlights: [
      "Built and enhanced React-based modules for BRIDGE, PayPal India’s enterprise employee platform spanning HR workflows, announcements, training and team connectivity.",
      "Built reusable UI components and shared design patterns, improving consistency, maintainability and delivery speed across modules.",
      "Translated business requirements into React workflows and integrated frontend functionality with backend APIs.",
      "Owned assigned modules end-to-end, from requirement clarification through development, testing, stakeholder demonstrations and delivery.",
    ],
    stack: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS",
      "SCSS",
      "Node.js",
      "React Bootstrap",
    ],
  },
  {
    company: "Eliptico IT Solutions Pvt Ltd",
    role: "Senior Software Engineer",
    location: "Remote",
    period: "Apr 2020 – Sep 2021",
    client: "eHealth Technologies",
    intro:
      "US healthcare information platform providing access to medical records collected from more than 85K medical facilities.",
    highlights: [
      "Developed modular healthcare web functionality supporting large-scale medical-records workflows across a platform connected to 85K+ medical facilities.",
      "Designed and implemented reusable Angular and React components with a focus on maintainability and consistent UI behavior.",
      "Worked directly with US-based stakeholders, laboratories and hospitals to clarify requirements and translate business needs into application features.",
      "Created and verified reusable components using Storybook to improve UI consistency and development quality.",
    ],
    stack: [
      "Angular",
      "React.js",
      "JavaScript",
      "Azure",
      "Mock API",
      "Storybook",
    ],
  },
  {
    company: "OpenWiFi Labs Pvt Ltd",
    role: "Software Developer",
    location: "On-site – Hyderabad",
    period: "Oct 2019 – Feb 2020",
    intro:
      "Simply5 — web platform for managing internet access for users in public locations such as cafés, colleges and hospitals.",
    highlights: [
      "Developed web application modules for Simply5 using React.js and Next.js, integrating frontend features with backend services.",
      "Built reusable UI components and implemented responsive, product-driven interfaces.",
      "Delivered features and resolved defects within sprint timelines alongside the core development team.",
    ],
    stack: ["React.js", "Next.js", "Node.js", "JavaScript", "Git", "Trello"],
  },
  {
    company: "Adaequare Info Pvt Ltd",
    role: "Software Engineer",
    location: "On-site – Hyderabad",
    period: "Jul 2016 – Sep 2019",
    intro:
      "Listany — e-commerce platform enabling businesses to create and manage online stores.",
    highlights: [
      "Built custom e-commerce storefronts on the Listany platform for 8 B2B clients and 4 additional B2C/owned projects — 12 implementations in total.",
      "Designed reusable product-listing, product-detail and facet-filter components used across multiple commerce implementations.",
      "Converted Adobe Photoshop and Adobe XD designs into responsive, cross-browser storefront UIs.",
      "Worked directly with clients to clarify requirements and business rules, translating them into tailored solutions.",
    ],
    clients: [
      "Silverwala",
      "FashionCentro",
      "SuperGummy",
      "HyderabadRunners",
      "BabyVille",
      "RoundRepublic",
      "CustomChocos",
      "Srinath Jewellers",
    ],
    stack: [
      "JsRender / JsViews",
      "jQuery",
      "Bootstrap",
      "JavaScript",
      "Gulp",
      "Node.js",
      "CSS3",
    ],
  },
  {
    company: "Udyog Software (I) Ltd",
    role: "Programmer Analyst – Application Support",
    location: "Mumbai",
    period: "Apr 2013 – Jun 2016",
    intro:
      "Business application implementation, customization and customer support.",
    highlights: [
      "Installed and configured business applications at customer locations.",
      "Delivered professional training for business modules.",
      "Designed and customized reports and modules using Visual FoxPro 9.0.",
      "Managed support tickets, customer change requests and release patch activities.",
    ],
    stack: ["Visual FoxPro 9.0", "Application Support", "Customer Training"],
  },
  {
    company: "Global Software",
    role: "Programmer Analyst – Application Support",
    location: "Mumbai",
    period: "Jul 2012 – Mar 2013",
    intro: "Channel partner of Udyog Software (I) Ltd.",
    highlights: [
      "Supported installation, configuration, training and maintenance of business applications.",
      "Handled customer tickets, customization requests and release patch installation.",
      "Provided online and offline customer support.",
    ],
    stack: ["Application Support", "Customer Support", "Implementation"],
  },
];
const projects = [
  {
    icon: <MapRoundedIcon />,
    title: "80K+ Point Map Performance",
    description:
      "Mapbox track-history visualization handling 80K+ points through a 4-stage pipeline — viewport filtering, zoom-aware sampling, movement filtering and distance-based reduction — keeping large-scale maps responsive.",
    tags: ["Mapbox GL", "React", "GeoJSON", "Performance"],
  },
  {
    icon: <MemoryRoundedIcon />,
    title: "Fixing “Page Unresponsive” with Web Workers",
    description:
      "Traced browser freezes to synchronous distance calculations on the main thread and moved them into a Web Worker, eliminating freezes during large-dataset rendering.",
    tags: ["Web Workers", "JavaScript", "Profiling"],
  },
  {
    icon: <TimelineRoundedIcon />,
    title: "Boundary-Aware Track Rendering",
    description:
      "Off-screen point filtering was drawing false lines across real gaps in multi-segment tracks. A boundary-aware flag in the rendering pipeline made the visualization accurate for operators.",
    tags: ["Mapbox GL", "Data accuracy", "GeoJSON"],
  },
  {
    icon: <SmartToyRoundedIcon />,
    title: "Robot Control & Mission Management",
    description:
      "Real-time operator UI for autonomous security systems, combining mission management, Redux-driven object-detection workflows and live telemetry.",
    tags: ["React", "Redux", "Telemetry", "Real-time UI"],
  },
  {
    icon: <VideocamRoundedIcon />,
    title: "Reliable Live Camera Feeds",
    description:
      "Resolved video-widget resets and resize/fill issues on camera switch in the robot camera-control interface by fixing component state race conditions and resize handling.",
    tags: ["React", "State management", "Debugging"],
  },
  {
    icon: <StorefrontRoundedIcon />,
    title: "12 E-commerce Storefronts",
    description:
      "Custom storefronts on the Listany platform for 8 B2B clients and 4 B2C/owned projects, built from shared product-listing, product-detail and facet-filter components.",
    tags: ["JavaScript", "jQuery", "JsViews", "E-commerce"],
  },
];
function Nav({ close }) {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      {["home", "about", "experience", "projects", "skills", "contact"].map(
        (i) => (
          <Button key={i} href={"#" + i} onClick={close} color="inherit">
            {i[0].toUpperCase() + i.slice(1)}
          </Button>
        ),
      )}
    </Stack>
  );
}
function SectionTitle({ eyebrow, title, text }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography
        variant="overline"
        color="primary"
        sx={{ fontWeight: 800, letterSpacing: 2 }}
      >
        {eyebrow}
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "2rem", md: "3rem" }, mt: 0.5, mb: 1.5 }}
      >
        {title}
      </Typography>
      {text && (
        <Typography
          color="text.secondary"
          sx={{ maxWidth: 760, fontSize: "1.05rem", lineHeight: 1.8 }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
}
export default function App() {
  const [drawer, setDrawer] = useState(false);
  return (
    <Box>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: "rgba(255,255,255,.82)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(15,23,42,.08)",
        }}
      >
        <Toolbar sx={{ maxWidth: 1180, width: "100%", mx: "auto" }}>
          <Typography sx={{ fontWeight: 900, flexGrow: 1 }}>AG.</Typography>
          <Nav close={() => setDrawer(false)} />
          <IconButton
            color="inherit"
            sx={{ display: { md: "none" } }}
            onClick={() => setDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
        <Box sx={{ width: 260, pt: 4 }}>
          <List>
            {[
              "home",
              "about",
              "experience",
              "projects",
              "skills",
              "contact",
            ].map((i) => (
              <ListItemButton
                component="a"
                href={"#" + i}
                key={i}
                onClick={() => setDrawer(false)}
              >
                <ListItemText primary={i[0].toUpperCase() + i.slice(1)} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main">
        <Box
          id="home"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            pt: 12,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box className="hero-glow" />
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Chip
                  label="10 YEARS OF WEB DEVELOPMENT · 7 IN REACT"
                  color="primary"
                  variant="outlined"
                  sx={{ mb: 3, fontWeight: 800 }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "3rem", sm: "4.2rem", md: "5.2rem" },
                    lineHeight: 0.98,
                  }}
                >
                  Building fast,{" "}
                  <Box component="span" className="gradient-text">
                    real-time
                  </Box>{" "}
                  web experiences.
                </Typography>
                <Typography
                  sx={{
                    mt: 3,
                    maxWidth: 760,
                    color: "text.secondary",
                    fontSize: { xs: "1.05rem", md: "1.25rem" },
                    lineHeight: 1.8,
                  }}
                >
                  Senior Software Engineer specializing in React.js, Redux and
                  real-time, data-heavy web interfaces. Currently building
                  mission-critical robot-control, live-telemetry and Mapbox
                  geospatial applications for autonomous security systems.
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mt: 4 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowOutwardIcon />}
                    href="#projects"
                  >
                    View My Work
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<DownloadIcon />}
                    href={resumeUrl}
                    download="Abhijit_Prakash_Gawankar_Resume.pdf"
                  >
                    Download Resume
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2.5}
                  sx={{ mt: 4, flexWrap: "wrap", rowGap: 1 }}
                >
                  <Stack direction="row" spacing={0.7} alignItems="center">
                    <LocationOnOutlinedIcon fontSize="small" />
                    <Typography color="text.secondary">Pune, India</Typography>
                  </Stack>
                  <Link
                    href="mailto:agawankar1989@gmail.com"
                    underline="hover"
                    color="inherit"
                  >
                    <Stack direction="row" spacing={0.7} alignItems="center">
                      <EmailOutlinedIcon fontSize="small" />
                      <Typography>Contact me</Typography>
                    </Stack>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/abhijit-prakash-gawankar/"
                    target="_blank"
                    rel="noreferrer"
                    underline="hover"
                    color="inherit"
                  >
                    <Stack direction="row" spacing={0.7} alignItems="center">
                      <LinkedInIcon fontSize="small" />
                      <Typography>LinkedIn</Typography>
                    </Stack>
                  </Link>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper className="profile-card" elevation={0}>
                  <Avatar className="profile-avatar">AG</Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 800, mt: 2 }}>
                    Senior Software Engineer
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1, lineHeight: 1.7 }}
                  >
                    React.js · Redux · JavaScript / TypeScript · Mapbox GL ·
                    CI/CD & Docker · AI-Driven Development
                  </Typography>
                  <Divider sx={{ my: 3 }} />
                  <Stack spacing={1.5}>
                    <Typography>
                      <b>80K+</b> map track-history points
                    </Typography>
                    <Typography>
                      <b>Real-time</b> telemetry interfaces
                    </Typography>
                    <Typography>
                      <b>Enterprise</b> clients incl. PayPal (via IBM)
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container maxWidth="lg">
          <Box id="about" sx={{ py: { xs: 9, md: 13 } }}>
            <SectionTitle
              eyebrow="ABOUT ME"
              title="Engineering with a performance mindset."
              text="Senior Software Engineer with 10 years of web development experience, including 7 years building production applications in React.js. I own features end-to-end and work closely with product, backend and QA teams for US and Indian enterprise clients, including PayPal (via IBM)."
            />
            <Grid container spacing={3}>
              {[
                [
                  "Frontend Architecture",
                  "Reusable React components, Redux state architecture, API-driven workflows and scalable UI patterns.",
                  <CodeRoundedIcon />,
                ],
                [
                  "Performance Engineering",
                  "Web Workers, viewport and zoom-based data reduction, profiling and responsive rendering of 80K+ point datasets.",
                  <SpeedRoundedIcon />,
                ],
                [
                  "Real-time Systems",
                  "Robot control, mission management, object detection workflows and telemetry-driven interfaces.",
                  <SmartToyRoundedIcon />,
                ],
                [
                  "Design-to-Code",
                  "Converting Figma, Adobe XD and Photoshop designs into responsive, pixel-accurate production UIs.",
                  <BrushRoundedIcon />,
                ],
                [
                  "CI/CD & Delivery",
                  "Azure DevOps pipelines and Docker-based builds for reliable releases across dev, staging and production.",
                  <CloudDoneRoundedIcon />,
                ],
                [
                  "AI-Driven Development",
                  "GitHub Copilot, ChatGPT and Claude for scaffolding, refactoring, debugging and test generation — with review to keep quality high.",
                  <AutoAwesomeRoundedIcon />,
                ],
              ].map(([t, x, icon]) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={t}>
                  <Paper className="feature-card" elevation={0}>
                    {icon}
                    <Typography variant="h6" sx={{ fontWeight: 800, mt: 2 }}>
                      {t}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ mt: 1.5, lineHeight: 1.8 }}
                    >
                      {x}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box id="experience" sx={{ py: { xs: 9, md: 13 } }}>
            <SectionTitle
              eyebrow="EXPERIENCE"
              title="A career built across products and platforms."
              text="From application support and customer implementations to senior frontend engineering, my career has evolved around solving real business and technical problems."
            />
            <Stack spacing={3}>
              {experiences.map((item) => (
                <Paper
                  key={item.company + item.period}
                  className="timeline-card"
                  elevation={0}
                >
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <Typography color="primary" sx={{ fontWeight: 800 }}>
                        {item.period}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 800, mt: 1 }}>
                        {item.company}
                      </Typography>
                      <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                        {item.role}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                      >
                        {item.location}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 9 }}>
                      <Typography
                        color="text.secondary"
                        sx={{ lineHeight: 1.7, mb: 2 }}
                      >
                        {item.client && (
                          <>
                            <b>Client:</b> {item.client} ·{" "}
                          </>
                        )}
                        {item.intro}
                      </Typography>
                      <Stack spacing={1.1}>
                        {item.highlights.map((h) => (
                          <Typography
                            key={h}
                            sx={{ color: "#1e293b", lineHeight: 1.7 }}
                          >
                            • {h}
                          </Typography>
                        ))}
                      </Stack>
                      {item.clients && (
                        <Typography
                          color="text.secondary"
                          sx={{ mt: 2, lineHeight: 1.7 }}
                        >
                          <b>Clients:</b> {item.clients.join(", ")}
                        </Typography>
                      )}
                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        useFlexGap
                        sx={{ mt: 2.5 }}
                      >
                        {item.stack.map((s) => (
                          <Chip
                            key={s}
                            label={s}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                      </Stack>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
              <Paper className="timeline-card" elevation={0}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <SchoolRoundedIcon color="primary" />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      Bachelor of Computer Application (BCA)
                    </Typography>
                    <Typography color="text.secondary">
                      Tilak Maharashtra University, Pune · 2010 – 2012
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Stack>
          </Box>
          <Box id="projects" sx={{ py: { xs: 9, md: 13 } }}>
            <SectionTitle
              eyebrow="SELECTED WORK"
              title="Projects worth talking about."
              text="A portfolio should make it easy for an interviewer to understand the engineering problems behind the features."
            />
            <Grid container spacing={3}>
              {projects.map((project) => (
                <Grid size={{ xs: 12, md: 6 }} key={project.title}>
                  <Paper className="project-card" elevation={0}>
                    <Box className="project-icon">{project.icon}</Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, mt: 2 }}>
                      {project.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ mt: 1.5, lineHeight: 1.8 }}
                    >
                      {project.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                      sx={{ mt: 2.5 }}
                    >
                      {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" />
                      ))}
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box id="skills" sx={{ py: { xs: 9, md: 13 } }}>
            <SectionTitle
              eyebrow="TECHNICAL STACK"
              title="Tools I use to build."
            />
            <Grid container spacing={3}>
              {Object.entries(skills).map(([g, list]) => (
                <Grid size={{ xs: 12, sm: 6 }} key={g}>
                  <Paper className="skill-card" elevation={0}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
                      {g}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      {list.map((s) => (
                        <Chip key={s} label={s} variant="outlined" />
                      ))}
                    </Stack>
                  </Paper>
                </Grid>
              ))}
              <Grid size={12}>
                <Paper className="skill-card" elevation={0}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
                    Domains
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {domains.map((d) => (
                      <Chip
                        key={d}
                        label={d}
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <Box id="contact" sx={{ py: { xs: 9, md: 13 }, pb: 12 }}>
            <Paper className="contact-card" elevation={0}>
              <Typography
                variant="overline"
                color="primary"
                sx={{ fontWeight: 800, letterSpacing: 2 }}
              >
                LET'S CONNECT
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: "2.3rem", md: "4rem" }, mt: 1 }}
              >
                Have a challenging frontend problem?
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ mt: 2, maxWidth: 700, lineHeight: 1.8 }}
              >
                I’m open to senior software engineering opportunities involving
                React.js, performance engineering, real-time and geospatial
                applications, and technically challenging products.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<EmailOutlinedIcon />}
                  href="mailto:agawankar1989@gmail.com"
                >
                  Email Me
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<LinkedInIcon />}
                  href="https://www.linkedin.com/in/abhijit-prakash-gawankar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<DownloadIcon />}
                  href={resumeUrl}
                  download="Abhijit_Prakash_Gawankar_Resume.pdf"
                >
                  Resume
                </Button>
              </Stack>
            </Paper>
          </Box>
        </Container>
      </Box>
      <Box
        component="footer"
        sx={{ borderTop: "1px solid rgba(15,23,42,.08)", py: 4 }}
      >
        <Container maxWidth="lg">
          <Typography color="text.secondary" align="center">
            © {new Date().getFullYear()} Abhijit Prakash Gawankar · Senior
            Software Engineer
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
