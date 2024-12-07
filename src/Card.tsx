type CardProps = {
  title: string;
  description: string;
};
const Card = ({ title, description }: CardProps) => {
  return (
    <div className="min-w-44 w-full h-fit shadow-lg bg-gray-800 rounded-xl p-6">
      <h1 className="text-gray-50 text-2xl pb-4">{title}</h1>
      <p className="text-gray-50 text-lg">{description}</p>
    </div>
  );
};

export default Card;
