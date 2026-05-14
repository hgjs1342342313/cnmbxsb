import { useState } from "react";
import { questions, roleOrder, roleProfiles } from "./data/quiz";
import type { RoleKey } from "./types";

type Stage = "landing" | "quiz" | "result";

const initialScores = () =>
  Object.fromEntries(roleOrder.map((role) => [role, 0])) as Record<RoleKey, number>;

function getTopRole(scores: Record<RoleKey, number>) {
  return roleOrder.reduce((best, role) =>
    scores[role] > scores[best] ? role : best,
  roleOrder[0]);
}

export default function App() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Record<RoleKey, number>>(initialScores);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const resultRole = roleProfiles[getTopRole(scores)];

  const startQuiz = () => {
    setScores(initialScores());
    setCurrentIndex(0);
    setStage("quiz");
  };

  const handleAnswer = (roleScores: Record<RoleKey, number>) => {
    const nextScores = { ...scores };

    for (const role of roleOrder) {
      nextScores[role] += roleScores[role] ?? 0;
    }

    setScores(nextScores);

    if (currentIndex === questions.length - 1) {
      setStage("result");
      return;
    }

    setCurrentIndex((index) => index + 1);
  };

  const restart = () => {
    setScores(initialScores());
    setCurrentIndex(0);
    setStage("landing");
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),_transparent_32%),linear-gradient(135deg,_#09111f_0%,_#10203a_45%,_#18263f_100%)] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">
              Career Role Test
            </p>
            <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
              应届生职业角色测试
            </h1>
          </div>
          <button
            type="button"
            onClick={restart}
            className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/80 transition hover:bg-white/12 hover:text-white"
          >
            重新开始
          </button>
        </header>

        {stage === "landing" ? (
          <main className="grid flex-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <section className="space-y-6">
              <span className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-sm text-amber-100">
                像做角色测试一样，找到更适合你的职业方向
              </span>
              <div className="space-y-4">
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  不用先决定一生，
                  <br />
                  先看看你更像哪一种职场角色。
                </h2>
                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  几分钟完成 8 道场景题，从你的判断方式、行动习惯和表达偏好里，
                  找到更适合你的职业气质与方向。
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["8 道题", "每题都用真实场景切入"],
                  ["6 种角色", "先测职业气质，再映射岗位"],
                  ["可落地", "结果里会给下一步建议"],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur"
                  >
                    <p className="text-lg font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={startQuiz}
                  className="rounded-full bg-amber-300 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-amber-200"
                >
                  开始测试
                </button>
                <p className="self-center text-sm text-slate-400">
                  适合应届生、实习生、校招生和正在犹豫方向的人
                </p>
              </div>
            </section>

            <section className="grid gap-4">
              {roleOrder.map((role, index) => {
                const profile = roleProfiles[role];

                return (
                  <article
                    key={role}
                    className={`rounded-[2rem] border p-5 backdrop-blur transition ${
                      index % 2 === 0
                        ? "border-amber-200/20 bg-white/10"
                        : "border-cyan-200/15 bg-slate-900/40"
                    }`}
                  >
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                      0{index + 1}
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {profile.name}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {profile.tagline}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                        {profile.careers[0]}
                      </span>
                    </div>
                  </article>
                );
              })}
            </section>
          </main>
        ) : null}

        {stage === "quiz" ? (
          <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/45 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                    Question {currentIndex + 1}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    选最像你的那一个，不用想“标准答案”。
                  </p>
                </div>
                <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/85">
                  {currentIndex + 1} / {questions.length}
                </div>
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-300 via-orange-300 to-cyan-300 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <h2 className="mt-8 text-2xl font-semibold leading-10 text-white sm:text-3xl">
                {currentQuestion.prompt}
              </h2>

              <div className="mt-8 grid gap-4">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.text}
                    type="button"
                    onClick={() => handleAnswer(option.scores)}
                    className="group rounded-[1.75rem] border border-white/10 bg-white/6 p-5 text-left transition hover:-translate-y-0.5 hover:border-amber-300/35 hover:bg-white/12"
                  >
                    <span className="text-base leading-7 text-slate-100 transition group-hover:text-white">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </main>
        ) : null}

        {stage === "result" ? (
          <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-6">
            <section className="rounded-[2rem] border border-amber-200/20 bg-[linear-gradient(135deg,_rgba(250,204,21,0.16),_rgba(255,255,255,0.08))] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur sm:p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-100/85">
                Your Career Role
              </p>
              <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.75fr]">
                <div>
                  <h2 className="text-4xl font-semibold text-white sm:text-5xl">
                    {resultRole.name}
                  </h2>
                  <p className="mt-4 text-lg text-amber-50">{resultRole.tagline}</p>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100/90">
                    {resultRole.summary}
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/12 bg-slate-950/35 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                    气质备注
                  </p>
                  <p className="mt-3 text-xl font-medium leading-8 text-white">
                    {resultRole.aura}
                  </p>
                  <p className="mt-6 text-sm text-slate-300">
                    这不是给你贴死标签，而是帮你先看清自己在职场里更容易发光的方式。
                  </p>
                </div>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <InfoCard title="你的优势" items={resultRole.strengths} />
              <InfoCard title="适合方向" items={resultRole.careers} />
              <InfoCard title="适合环境" items={resultRole.environments} />
              <InfoCard title="下一步建议" items={resultRole.nextSteps} />
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-slate-950/45 p-6 backdrop-blur sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                需要注意
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-100">
                {resultRole.watchOut}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={startQuiz}
                  className="rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  再测一次
                </button>
                <button
                  type="button"
                  onClick={restart}
                  className="rounded-full border border-white/15 bg-white/8 px-6 py-3 text-base text-white transition hover:bg-white/12"
                >
                  回到首页
                </button>
              </div>
            </section>
          </main>
        ) : null}
      </div>
    </div>
  );
}

type InfoCardProps = {
  title: string;
  items: string[];
};

function InfoCard({ title, items }: InfoCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{title}</p>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <p key={item} className="rounded-2xl bg-slate-950/35 px-4 py-3 text-sm leading-6 text-slate-100">
            {item}
          </p>
        ))}
      </div>
    </article>
  );
}

