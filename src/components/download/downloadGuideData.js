import { Terminal } from "lucide-react";

export const downloadLinks = {
  macos:
    "https://github.com/vickymadhav1/fe-AI/releases/download/v1.0.0/InterviewMateAI-mac-1.0.0.dmg",
  windows: "/InterviewMateAI-Win-1.0.0.exe",
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
    subtitle: "Installation takes about 1 minute.",
    primaryLabel: "Download for Windows",
    downloadUrl: downloadLinks.windows,
    steps: [
      {
        title: "Download the Interview Mate AI Windows installer (.exe).",
      },
      {
        title: "Open the downloaded installer.",
      },
      {
        title:
          "If Windows Defender SmartScreen appears, click 'More info', then click 'Run anyway'.",
      },
      {
        title: "Follow the installation wizard to complete the installation.",
      },
      {
        title: "Launch Interview Mate AI.",
      },
      {
        title: "Grant Microphone and Screen Recording permissions if prompted.",
      },
    ],
    note: {
      title: "Beta Application Notice",
      description:
        "Interview Mate AI is currently distributed as a beta application. Windows Defender SmartScreen may display a warning because the app has not yet established Microsoft reputation. This is expected and does not indicate that the application is unsafe.",
    },
    highlight:
      'If SmartScreen appears, simply click "More info" -> "Run anyway" to continue.',
    metadata: [],
  },
};
