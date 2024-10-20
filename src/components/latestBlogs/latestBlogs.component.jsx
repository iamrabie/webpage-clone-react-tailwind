import Title from "../title/title.component";
import Card from "../card/card.component";


const LatestBlogs = () => {


    const latestBlogs = [
        {
            id:0 , 
            title:'The future of AI in software engineering' , 
            type:'Engineering' , 
            text:'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software...' , 
            people:'Remy Sharp, Travis Howard' , 
            date:'20th-July,2024'
        },
        {
            id:0 , 
            title:'Driving growth with user-centric product design' , 
            type:'Product' , 
            text:'Our user-centric product design approach is driving significant growth. Learn about the strategies we employ to create products that resonate with users.' , 
            people:'Erica Johns' , 
            date:'20th-July,2024'
        },
        {
            id:0 , 
            title:'Embracing minimalism in modern design' , 
            type:'Design' , 
            text:'Minimalism is a key trend in modern design. Discover how our design team incorporates minimalist principles to create clean and impactful user experiences.' ,
            people:'Kate Morrison' , 
            date:'20th-July,2024'
        },
        {
            id:0 , 
            title:'Cultivating a culture of innovation' , 
            type:'Company' , 
            text:'Innovation is at the heart of our company culture. Learn about the initiatives we have in place to foster creativity and drive groundbreaking solutions.' , 
            people:'Cindy Baker' , 
            date:'20th-July,2024'
        },
        {
            id:0 , 
            title:'Advancing cybersecurity with next-gen solutions' , 
            type:'Engineering' , 
            text:'Our next-generation cybersecurity solutions are setting new standards in the industry. Discover how we protect our clients from evolving cyber threats.' , 
            people:'Agnes Walker, Trevor Henderson' , 
            date:'20th-July,2024'
        },  
        {
            id:0 , 
            title:'Advancing cybersecurity with next-gen solutions' , 
            type:'Engineering' , 
            text:'Our next-generation cybersecurity solutions are setting new standards in the industry. Discover how we protect our clients from evolving cyber threats.' , 
            people:'Travis Howard' , 
            date:'20th-July,2024'
        },  
        {
            id:0 , 
            title:'Advancing cybersecurity with next-gen solutions' , 
            type:'Engineering' , 
            text:'Our next-generation cybersecurity solutions are setting new standards in the industry. Discover how we protect our clients from evolving cyber threats.' , 
            people:'Agnes Walker, Trevor Henderson' , 
            date:'20th-July,2024'
        },     
    ];


    return(
        <>
        <div className="flex flex-col gap-y-[36px]">
          <Title title="Latest" />
          <div className="card">
            {latestBlogs.map((items) => {
                return(
                    <>
                      <div className="flex flex-col gap-y-4">
                        <Card 
                            subTitle={items.type} 
                            title={items.title}
                            text={items.text}
                        />
                        <div className="flex justify-between">
                          <div className="flex gap-x-2 items-center">
                             <img src='https://mui.com/static/images/avatar/7.jpg' className='h-6 w-6 rounded-full' alt='' />
                              <p className="text-[13px]">{items.people}</p>
                          </div>
                          <p className="text-[13px]">July 14, 2021</p>
                        </div>
                     </div>
                    </>
                );
            })}
          </div>
        </div>
        </>
    );
}


export default LatestBlogs;