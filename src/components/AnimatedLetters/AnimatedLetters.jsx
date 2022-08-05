import './AnimatedLetters.scss'

export default function AnimatedLetters({letterClass, strArray, index}){
    return(
        <div className='div'>
            <span className='span'>
                {
                    strArray.map((char, i) =>(
                        <span key={char + i} className={`${letterClass} _${i, index}`}>
                            {char}
                        </span>
                    ))
                }
                </span>

        </div>
    )
}