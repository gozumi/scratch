# My React Project

This project is a React application built with TypeScript and Vite, utilizing pnpm as the package manager. It is structured using workspaces, with separate packages for the main application and a reusable time component.

## Project Structure

```
my-react-project
├── packages
│   └── app                # Main application package
│       ├── src            # Source files for the app
│       ├── public         # Public assets
│       ├── package.json    # App package configuration
│       └── tsconfig.json   # TypeScript configuration for the app
├── components
│   └── time               # Time component package
│       ├── src            # Source files for the time component
│       ├── package.json    # Time component package configuration
│       └── tsconfig.json   # TypeScript configuration for the time component
├── package.json            # Root package configuration
├── pnpm-workspace.yaml     # Workspace configuration for pnpm
└── README.md               # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-react-project
   ```

2. **Install dependencies:**
   ```
   pnpm install
   ```

3. **Run the application:**
   ```
   pnpm --filter @package/app run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

The main application displays the current date and time using the `@component/time` component. The time updates every second, providing real-time information.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.