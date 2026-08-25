import GuardianHUD from "./GuardianHud";

export default function HoloFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="holo-frame">
      <GuardianHUD />
      <div className="holo-content">{children}</div>
    </div>
  );
}

