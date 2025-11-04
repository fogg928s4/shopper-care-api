import { server } from './app';

const PORT = Number(process.env.PORT) || 3000;

function iniciarAPI() {
  try {
    server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log('Could not start server :(', error);
    process.exit(1);
  }
}

iniciarAPI();
