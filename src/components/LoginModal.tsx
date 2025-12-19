'use client';

import { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 추가
    console.log('Login:', { email, password, keepLoggedIn });
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        <h2 className="modal-title">로그인</h2>

        <form onSubmit={handleLogin}>
          <div className="modal-input-group">
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="modal-input"
            />
          </div>

          <div className="modal-input-group">
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="modal-input"
            />
          </div>

          <div className="modal-checkbox-group">
            <label className="modal-checkbox-label">
              <input
                type="checkbox"
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
                className="modal-checkbox"
              />
              <span>로그인상태유지</span>
            </label>
          </div>

          <button type="submit" className="modal-btn-primary">
            로그인
          </button>
        </form>

        <div className="modal-links">
          <a href="/signup" className="modal-link">회원가입</a>
          <a href="/find-account" className="modal-link">아이디 · 비밀번호 찾기</a>
        </div>

        <div className="modal-divider">
          <span>또는</span>
        </div>

        <button className="modal-btn-secondary">
          비회원 주문배송 조회
        </button>
      </div>
    </div>
  );
}
