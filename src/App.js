import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ExaineFeed from './components/ExaineFeed';
function App() {
  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="885c63d8-d693-4360-ae53-ad4d6918d749"
        userName="arshedbv"
        userSecret="123"
        renderChatFeed={(exaineProps) => <ExaineFeed {...exaineProps}/>}
      />
    </>
  );
}

export default App;
