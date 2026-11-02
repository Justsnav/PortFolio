import { Reveal } from "@/components/layout/Reveal";

export function AboutSection() {
  return (
    <Reveal id="about" title="About me" index="01">
      <div className="about-grid">
        <p>
          I’m a computer science student learning by making. I care about clear
          interfaces, reliable systems, and the small details that make
          technology feel useful.
        </p>
        <div>
          <span>Currently exploring</span>
          <div className="pills">
            <b>Data structures</b>
            <b>Full-stack web</b>
            <b>System design</b>
          </div>
          <small>
            My current goal is to build stronger foundations in algorithms
            while shipping projects that solve everyday problems.
          </small>
        </div>
      </div>
    </Reveal>
  );
}
