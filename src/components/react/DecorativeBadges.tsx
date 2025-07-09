import { useMemo, memo } from "react";

export const DecorativeBadges = memo(() => {
  const badgeStyles = useMemo(
    () => [
      "size-3 rounded-full bg-purple-200/75 sepia-50",
      "size-3 bg-violet-200/75 sepia-50 rounded-xs",
      "size-3 rounded-xs bg-emerald-200/75 sepia-50",
      "size-3 bg-fuchsia-200/75 sepia-50",
      "size-3 rounded-full bg-teal-200/75 sepia-50",
      "size-3 rounded-full bg-transparent ring-2 ring-sky-200/75 sepia-50 ring-inset",
    ],
    []
  );

  const clipPaths = useMemo(
    () => [
      undefined,
      "polygon(50% 100%, 100% 50%, 100% 0%, 0% 0%, 0% 50%)",
      undefined,
      "polygon(50% 0%, 85% 0%, 100% 35%, 85% 55%, 50% 100%, 15% 55%, 0% 35%, 15% 0%)",
      undefined,
      undefined,
    ],
    []
  );

  return (
    <div className="bg-border/50 flex items-center gap-1.5 px-2">
      {badgeStyles.map((style, index) => (
        <div
          key={index}
          className={style}
          style={clipPaths[index] ? { clipPath: clipPaths[index] } : undefined}
        />
      ))}
    </div>
  );
});
