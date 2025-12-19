import Image from 'next/image';

export default function NetworkingSection() {
  return (
    <section className="networking-section">
      <div className="networking-content">
        <div className="networking-info">
          <h2 className="networking-title">교육·네트워킹 사업</h2>
          <p className="networking-text">
            물류산업 관련 세미나, 포럼, 컨퍼런스, 직무 설명회 등 정보 교류 및 네트워킹 행사를 개최합니다.
          </p>
          <ul className="networking-list">
            <li>정기 세미나 개최</li>
            <li>물류산업 포럼 운영</li>
            <li>국제 컨퍼런스 주관</li>
            <li>청년 직무 설명회</li>
            <li>회원사 네트워킹 행사</li>
            <li>전문가 초청 강연</li>
          </ul>
        </div>

        <div className="networking-image">
          <Image 
            src="/images/networking.jpg" 
            alt="교육네트워킹"
            width={480}
            height={340}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
