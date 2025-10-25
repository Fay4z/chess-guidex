import BasicsCard from "@/components/chess/BasicsCard"

const Quiz = () => {
    const quizCardData = [
        {
            cardHeader: "Beginner Quiz",
            cardContent: "Learn about chess peices, chess board, and the each peice points",
            cardLink: "/puzzles",
            cardLinkText: "Get Started"
        },
        {
            cardHeader: "Intermediate Quiz",
            cardContent: "Learn about movement of chess peices and chess peice captures",
            cardLink: "/openings",
            cardLinkText: "Get Started"
        },
        {
            cardHeader: "Advanced Quiz",
            cardContent: "Learn about chess rules including En pasent",
            cardLink: "/openings",
            cardLinkText: "Get Started"
        }
    ]
    return (
        <div className="flex flex-row justify-center space-x-10 m-20">
      {quizCardData.map((data, index) => (
        <BasicsCard 
        key={index}
        cardHeader = {data.cardHeader}
        cardContent = {data.cardContent}
        cardLink = {data.cardLink}
        cardLinkText = {data.cardLinkText}
        />
      ))}
    </div>
    )
}

export default Quiz