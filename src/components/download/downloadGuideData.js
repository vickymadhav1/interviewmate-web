import {
  AlertTriangle,
  CheckCircle2,
  Download,
  Mic,
  MonitorCheck,
  PlayCircle,
  ShieldAlert,
  Terminal,
} from "lucide-react";

export const downloadLinks = {
  macos:
    "https://github.com/vickymadhav1/fe-AI/releases/download/v1.0.0/InterviewMateAI-macOS-1.0.0.dmg",
  windows:
    "https://github.com/vickymadhav1/fe-AI/releases/download/v1.0.0/InterviewMateAI-Windows-Portable-1.0.0.exe",
};

export const downloadGuides = {
  macos: {
    platform: "macOS",
    title: "",
    subtitle: "Before downloading, please read these quick installation steps.",
    primaryLabel: "Download for macOS",
    downloadUrl: downloadLinks.macos,
    steps: [],
    note: {
      icon: "",
      title: "",
      body: [],
    },
    advancedFix: {
      eyebrow: "Having trouble opening the app?",
      title: "Advanced Fix (only if needed)",
      defaultOpen: true,
      icon: Terminal,
      videoSrc: "",
      explanation: [
        'If the application still shows "Interview Mate AI is damaged and can\'t be opened" or "Apple could not verify Interview Mate AI", use this fix.',
        "Some versions of macOS add a quarantine attribute to applications downloaded from the internet.",
        'If the app still won\'t open after trying "Right Click → Open", remove the quarantine attribute once by running:',
      ],
      command:
        'xattr -rd com.apple.quarantine "/Applications/Interview Mate AI.app"',
      afterSteps: [
        "Open the Applications folder.",
        "Launch Interview Mate AI again.",
      ],
      notice:
        "This command is only required for the current unsigned beta release of Interview Mate AI. Once the application is Apple-signed and notarized, this step will no longer be necessary.",
    },
    metadata: [],
  },
  windows: {
    platform: "Windows",
    title: "Download Interview Mate AI for Windows",
    subtitle: "Installation only takes a minute.",
    primaryLabel: "Download for Windows",
    downloadUrl: downloadLinks.windows,
    steps: [
      {
        icon: Download,
        title: "Download the Windows installer (.exe).",
      },
      {
        icon: PlayCircle,
        title: "Run the installer.",
      },
      {
        icon: AlertTriangle,
        title: "If Windows SmartScreen appears, click More info, then Run anyway.",
      },
      {
        icon: CheckCircle2,
        title: "Complete installation.",
      },
      {
        icon: MonitorCheck,
        title: "Launch Interview Mate AI.",
      },
      {
        icon: Mic,
        title: "Grant microphone and screen permissions if prompted.",
      },
    ],
    note: {
      icon: ShieldAlert,
      title: "Windows Security Notice",
      body: [
        "Windows Defender may show a warning because the application is not yet code signed.",
        "This is expected during beta.",
      ],
    },
    metadata: [],
  },
};
