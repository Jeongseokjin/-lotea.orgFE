import Link from 'next/link';
import Image from 'next/image';

export default function FutureSection() {
  return (
    <section className="future-section">
      <h2 className="future-title">함께하는 물류 미래</h2>
      <p className="future-subtitle">물류테트리스협회와 함께 물류산업의 발전을 이끌어갑니다</p>
      
      <div className="future-content">
        {/* 이미지 영역 */}
        <div className="future-image">
          <Image 
            src="/images/future.jpg" 
            alt="비즈니스 악수"
            width={520}
            height={360}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* 정보 영역 */}
        <div className="future-info">
          <h3 className="future-info-title">회원 가입 안내</h3>
          <p className="future-info-text">
            물류산업 종사자, 관련 기업, 연구자 등 누구나 협회 회원으로 참여하실 수 있습니다.<br />
            다양한 교육 프로그램과 네트워킹 기회를 제공합니다.
          </p>
          <ul className="future-info-list">
            <li>정기 세미나 및 포럼 참석</li>
            <li>물류산업 최신 정보 제공</li>
            <li>교육 프로그램 우선 참여</li>
            <li>회원사 간 네트워킹 지원</li>
          </ul>
        </div>
      </div>

      <div className="future-buttons">
        <Link href="/join" className="future-btn-primary">
          회원가입 문의
        </Link>
        <Link href="/join" className="future-btn-secondary">
          사업 참여하기
        </Link>
      </div>
    </section>
  );
}
