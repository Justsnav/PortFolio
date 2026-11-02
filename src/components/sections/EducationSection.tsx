import { Reveal } from "@/components/layout/Reveal";

export function EducationSection() {
  return (
    <Reveal id="education" title="Education" index="02">
      <article className="education">
        <div className="education-mark">ED</div>
        <div>
          <p className="eyebrow">RNS Institute of Technology</p>
          <h3>BE· Computer Science and Engineering (AI & Machine Learning)</h3>
          <p>2023 - 2027</p>
          <div className="coursework">
            Relevant Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Object-Oriented Programming System (OOPS), Machine Learning
          </div>
        </div>
      </article>
    </Reveal>
  );
}
