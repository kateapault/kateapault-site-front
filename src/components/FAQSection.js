import React from 'react'

const FAQSection = props => {
    return(
        <div className='faq'>
            <div className='q-a'>
                <div className="q">Q: Where can I see examples of your code?</div>
                <div className="a">A: On my GitHub (check out the 'links' section)</div>
            </div>
            <div className='q-a'>
                <div className="q">Q: Why did you switch from mechanical engineering to software engineering?</div>
                <div className="a">A: I really like making stuff. There's not much manufacturing near NYC, so after moving here for my partner's job I started concentrating on programming because I want to keep developing products. I've worked with many different materials and manufacturing methods - for me, programming is just another way to make products that improve people's lives, and that's what I want to do.</div>
            </div>
            <div className='q-a'>
                <div className="q">Q: Why 'kateapault'?</div>
                <div className="a">A: It's a college nickname, using an alternate 
                spelling for 'catapult' and a play on my name. Why the alternate 
                spelling? Honestly, I just like the digraph look.</div>
            </div>
            <div className='q-a'>
                <div className="q">Q: That's definitely a trebuchet picture, not a catap(a)ult.</div>
                <div className="a">A: It is a trebuchet, one that I drew myself, but trebuchets are a type of catapault - technically, catapaults are <a href="https://en.wikipedia.org/wiki/Catapult" target="_blank" rel="noopener noreferrer"><u>any ballistic device that throws a projectile without the aid of gunpowder or other propellants.</u></a></div>
            </div>
            <div className='q-a'>
                <div className="q">Q: Is it true you drink inhuman amounts of tea?</div>
                <div className="a">A: I personally don't consider 10+ cups a day to be 
                an inhuman amount, but I've been informed that is not the majority view.</div>
            </div>
            <div className='q-a'>
                <div className="q">Q: What are you currently reading?</div>
                <div className="a">A: <span><u>Catherine the Great</u></span> by Robert Massie. It's really engaging - he writes nonfiction incredibly well.</div>
            </div>
        </div>
    )
};

export default FAQSection;