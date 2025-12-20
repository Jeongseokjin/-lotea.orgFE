// src/components/LegalModal.tsx
"use client";

import React, { useEffect } from "react";

// ✅ 추가: termsDoc/privacyDoc가 참조하는 타입 복구
export type LegalDocSection = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export type LegalDoc = {
  title: string;
  meta: string;
  intro?: string[];
  sections: LegalDocSection[];
};

export type Props = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function LegalModal({ open, title, onClose, children }: Props) {
  useEffect(() => {
    if (!open) return;

    // 스크롤 잠금
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // ESC 닫기
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="presentation"
      onMouseDown={(e) => {
        // 오버레이(바깥) 클릭 시 닫기
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.70)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={{
          width: "min(980px, 100%)",
          height: "min(78vh, 860px)",
          background: "#fff",
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.30)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "14px 16px",
            borderBottom: "1px solid rgba(0,0,0,0.10)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 800 }}>{title}</div>
          <button
            type="button"
            onClick={onClose}
            style={{
              border: "1px solid rgba(0,0,0,0.12)",
              background: "#fff",
              borderRadius: 10,
              padding: "8px 10px",
              cursor: "pointer",
              fontWeight: 800,
            }}
            aria-label="닫기"
          >
            닫기
          </button>
        </div>

        {/* ✅ Footer에서 넘긴 TermsContent/PrivacyContent가 여기로 들어옵니다 */}
        <div style={{ padding: 16, overflow: "auto" }}>{children}</div>
      </div>
    </div>
  );
}
