import { downloadGuides } from "./downloadGuideData";
import MacInstallDrawer from "./drawer/MacInstallDrawer";
import WindowsInstallDrawer from "./drawer/WindowsInstallDrawer";

export default function DownloadGuideModal({ platform, isOpen, onClose }) {
  const guide = platform ? downloadGuides[platform] : null;

  if (platform === "macos") {
    return (
      <MacInstallDrawer
        isOpen={isOpen}
        downloadUrl={guide?.downloadUrl}
        onClose={onClose}
      />
    );
  }

  if (platform === "windows" && guide) {
    return (
      <WindowsInstallDrawer guide={guide} isOpen={isOpen} onClose={onClose} />
    );
  }

  return null;
}
