import renderer from 'react-test-renderer';
import { RouterProvider, createMemoryRouter} from 'react-router-dom';
import { routing } from '../routingConfig'
import { Provider } from '../casesContext';


test('renders landing page', () => {
  const router = createMemoryRouter(routing)
  const tree = renderer.create(
    <Provider value={["./crypto/case.md", "./travel/case.md"]}>
      <RouterProvider router={router} />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
}
);
