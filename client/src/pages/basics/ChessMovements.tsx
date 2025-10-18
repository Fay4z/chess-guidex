import { Chessboard } from "react-chessboard"

const ChessMovements = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
            Chess Movements
          </h1>
          <p className="mt-6 max-w-[60ch] sm:text-lg">
            Chess is a two-player strategy board game played on an 8×8 grid of alternating light and dark squares. 
            Each player commands an army of 16 pieces, aiming to checkmate the opponent’s king — meaning the king is 
            under attack and cannot escape.
          </p>
          <p className="mt-6 max-w-[60ch] sm:text-lg">
            Blending tactics, strategy, and foresight, chess challenges players to think critically, plan ahead, and adapt to 
            changing situations. It’s one of the world’s oldest and most respected games, played and studied globally for over 
            1,500 years.
          </p>
        </div>
        <div className="w-full aspect-auto rounded-xl">
            <Chessboard />
        </div>
      </div>
    </div>
    )
}

export default ChessMovements