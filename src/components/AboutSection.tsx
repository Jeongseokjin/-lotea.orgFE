import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="about-section">
      <h2 className="about-title">협회 소개</h2>
      <p className="about-description">
        물류테트리스협회는 물류 및 공급망 분야의 교육·연구와 디지털 및 스마트물류 확산을 통해<br />
        중소 물류기업과 청년 인력의 역량을 강화하고, 물류산업의 건전한 발전에 이바지하는 비영리 협회입니다.
      </p>
      
      <div className="about-images">
        {/* 이미지 1: 물류 창고 */}
        <div className="about-image">
          <Image 
            src="/images/about-1.jpg" 
            alt="물류 창고"
            width={360}
            height={260}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* 이미지 2: 스마트 물류 태블릿 */}
        <div className="about-image">
          <Image 
            src="/images/about-2.jpg" 
            alt="스마트 물류"
            width={360}
            height={260}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* 이미지 3: 팀 회의 */}
        <div className="about-image">
          <Image 
            src="/images/about-3.jpg" 
            alt="팀 회의"
            width={360}
            height={260}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
