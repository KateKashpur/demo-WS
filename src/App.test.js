import {createRoot} from "react-dom/client";
import SamuraiApp from './App';

test('renders without crashing', () => {
const div = document.createElement('div');
const root = createRoot(div);
root.render(<SamuraiApp />);
root.unmount()
});
