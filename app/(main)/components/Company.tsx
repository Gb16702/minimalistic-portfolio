import Link from "next/link";

interface CompanyProps {
  name: string;
  role: string;
  period: string;
  description: string;
  achievements?: Array<{
    text: string;
    url: string;
  }>;
  technologies: string;
}

export function Company({
  name,
  role,
  period,
  description,
  achievements,
  technologies,
}: CompanyProps) {
  return (
    <div className="border-t border-border-default pt-8">
      <h3 className="text-base font-medium mb-2">{name}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
        <p className="text-muted-foreground">{role}</p>
        <span className="text-muted-foreground text-sm whitespace-nowrap sm:ml-4">
          {period}
        </span>
      </div>

      <p className="mt-4 text-foreground">{description}</p>

      {achievements && achievements.length > 0 && (
        <ul className="mt-6 space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index}>
              <Link
                href={achievement.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {achievement.text}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-70"
                >
                  <path
                    d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-6 text-muted-foreground">{technologies}</p>
    </div>
  );
}
