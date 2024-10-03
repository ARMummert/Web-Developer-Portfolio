import { createRoot } from 'react-dom/client';

const BatonTwirlingDemo = () => {
    
        return (
            <div>
                <h1 className='baton-twirling'>Baton Twirling Competition Entry Form Database</h1>  
                <h3 className='baton-twirling2'>Node.JS Express.JS Express-Handlebars MySQL</h3>
                <p className='baton-twirling3'>A MySQL Database that stores baton twirling competition entry forms.</p>
                <img className='home-img'src={require('./images/homepage.png')} width='300px' alt="" />
                <img className='competition-img'src={require('./images/competitions.png')} alt="" />
                <img className='event-img'src={require('./images/events.png')} alt="" />
                <img className='athlete-img'src={require('./images/athletes.png')} alt="" />
                <img className='team-img'src={require('./images/teams.png')} alt="" />
                <img className='division-img'src={require('./images/divisions.png')} alt="" />
                <img className='eventlevel-img'src={require('./images/eventlevels.png')} alt="" />
                <img className='athleteevent-img'src={require('./images/athletesevents.png')} alt="" />
                <p className='authors'>The Baton Twirling Competition Entry Form Database was created by Amy Mummert & Joel Vrieze</p>
            </div>
        ); 
};
const root = createRoot(document.getElementById('root'));
root.render(<BatonTwirlingDemo/>);

export default BatonTwirlingDemo;
