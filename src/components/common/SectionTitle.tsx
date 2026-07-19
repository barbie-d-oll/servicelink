interface Props {
  badge: string;
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
        {badge}
      </span>

      <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}