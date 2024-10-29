import React from 'react'

const page = () => {
  return (
    <div>
        <h1 className='ml-20 text-2xl mt-10 '> What is AI?</h1> <br />
        <p className='ml-20'>
        Artificial Intelligence (AI) refers to the development of computer systems that can perform tasks <br />
        typically requiring human intelligence. These tasks include problem-solving, learning, understanding <br />
        language, recognizing images, and making decisions. AI uses various techniques such as machine <br />
        learning (ML), where computers improve performance over time through data analysis, and natural <br />
        language processing (NLP), which helps machines understand human language.</p> 
        <br />
        <h1 className='ml-20 text-2xl '>AI is classified into three main types:</h1> <br />
        <ol className='ml-20'>
            <li className='mt-2'><b>Narrow AI</b> : Specialized in one task (e.g., virtual assistants like Siri).</li>
            <li className='mt-2'><b>General AI</b> : Hypothetical systems that could perform any intellectual task a human can.</li>
            <li className='mt-2'><b>Superintelligent AI</b> : Future systems expected to surpass human intelligence.</li>
            <br />
            <p>
            AI powers applications in fields like healthcare, finance, robotics, and autonomous vehicles, <br />
            transforming industries by enhancing efficiency and enabling automation.

            </p>
            <br />
        </ol>

    </div>
  )
}

export default page