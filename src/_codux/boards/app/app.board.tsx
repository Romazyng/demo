import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasBackgroundColor: '#bc1e1e', windowWidth: 1024, windowHeight: 768, windowBackgroundColor: '#ffffff'
    }
});
