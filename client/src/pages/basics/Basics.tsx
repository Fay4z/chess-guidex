import BasicsCard from "@/components/chess/BasicsCard";

const Basics = () => {
  const basicsCardData = [
        {
            cardHeader: "Chess Introduction",
            cardContent: "Learn about chess peices, chess board, and the each peice points",
            cardLink: "/puzzles",
            cardLinkText: "Get Started"
        },
        {
            cardHeader: "Chess Peice Movement",
            cardContent: "Learn about movement of chess peices and chess peice captures",
            cardLink: "/openings",
            cardLinkText: "Get Started"
        },
        {
            cardHeader: "Chess Rules",
            cardContent: "Learn about chess rules including En pasent",
            cardLink: "/openings",
            cardLinkText: "Get Started"
        }
    ]
  return (
    <div className="flex flex-row justify-center space-x-10 m-20">
      {basicsCardData.map((data, index) => (
        <BasicsCard 
        key={index}
        cardHeader = {data.cardHeader}
        cardContent = {data.cardContent}
        cardLink = {data.cardLink}
        cardLinkText = {data.cardLinkText}
        />
      ))}
    </div>
  );
};

export default Basics;
