# Company Directory

A modern, responsive company directory application built with React, featuring advanced filtering, sorting, and multiple view modes. This application allows users to browse and filter companies across various industries with a beautiful, user-friendly interface.

## 🚀 Features

- **Advanced Filtering**: Filter companies by name, description, industry, and location
- **Smart Sorting**: Sort by name, industry, location, employees, or founding year in ascending or descending order
- **Multiple View Modes**: Switch between table and card views for different browsing experiences
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Pagination**: Navigate through large datasets with ease using built-in pagination
- **Real-time Search**: Search companies by name or description with instant results
- **Modern UI**: Beautiful gradient design with smooth animations and transitions
- **Error Handling**: Graceful error handling with user-friendly error messages
- **Loading States**: Professional loading indicators for better user experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.14
- **HTTP Client**: Axios 1.12.2
- **Mock API**: JSON Server 1.0.0-beta.3
- **Linting**: ESLint 9.36.0

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FrontlinesEdutech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🚦 Usage

This application requires two servers to run: the Vite development server and the JSON Server API.

### Option 1: Run in Separate Terminals

**Terminal 1 - Start the JSON Server (API):**
```bash
npm run api
```
This will start the API server at `http://localhost:3000`

**Terminal 2 - Start the Development Server:**
```bash
npm run dev
```
This will start the Vite development server (typically at `http://localhost:5173`)

### Option 2: Use Concurrent Commands (Recommended)

You can run both servers simultaneously in the background:
```bash
npm run api & npm run dev
```

## 📦 Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality
- `npm run api` - Start the JSON Server mock API

## 📁 Project Structure

```
FrontlinesEdutech/
├── src/
│   ├── components/
│   │   ├── CompanyCard.jsx      # Card view component for displaying companies
│   │   ├── CompanyTable.jsx     # Table view component for displaying companies
│   │   ├── ErrorMessage.jsx     # Error message component
│   │   ├── FilterControls.jsx   # Filter and sort controls
│   │   ├── LoadingSpinner.jsx   # Loading indicator component
│   │   └── Pagination.jsx       # Pagination component
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles with Tailwind directives
├── db.json                      # JSON Server database with company data
├── index.html                   # HTML template
├── package.json                 # Project dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── eslint.config.js            # ESLint configuration
```

## 🎯 Key Features Explained

### Filtering
- **Search**: Type in the search bar to filter companies by name or description
- **Industry Filter**: Select a specific industry from the dropdown
- **Location Filter**: Filter companies by their location

### Sorting
- Sort by: Name, Industry, Location, Employees, or Founded Year
- Toggle between ascending and descending order

### View Modes
- **Table View**: Compact view showing all company details in a structured table
- **Card View**: Visual grid layout with individual cards for each company

### Pagination
- Navigate through pages with Previous/Next buttons
- Jump directly to any page number
- Displays current page and total pages
- Shows result count (e.g., "Showing 1-10 of 25 companies")

## 🗄️ API Endpoints

The JSON Server provides the following endpoints:

- `GET /companies` - Fetch all companies
- `GET /companies/:id` - Fetch a single company by ID
- `POST /companies` - Add a new company
- `PUT /companies/:id` - Update a company
- `DELETE /companies/:id` - Delete a company

## 📊 Sample Data Structure

```json
{
  "id": 1,
  "name": "TechCorp Solutions",
  "industry": "Technology",
  "location": "San Francisco, CA",
  "employees": 1500,
  "founded": 2010,
  "description": "Leading provider of cloud-based enterprise solutions"
}
```

## 🎨 UI/UX Highlights

- **Gradient Headers**: Eye-catching blue-to-purple gradient header
- **Smooth Transitions**: Hover effects and smooth state transitions
- **Loading States**: Animated spinner during data fetching
- **Empty States**: Friendly messages when no results are found
- **Responsive Grid**: Adaptive layout that adjusts to screen size
- **Shadow Effects**: Subtle shadows for depth and visual hierarchy

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Development Notes

- The application uses React hooks (useState, useEffect) for state management
- Tailwind CSS provides utility-first styling
- JSON Server creates a full fake REST API with zero coding
- Vite offers fast HMR (Hot Module Replacement) for rapid development

## 🐛 Troubleshooting

### API Connection Error
If you see "Failed to fetch companies", ensure:
1. JSON Server is running on port 3000 (`npm run api`)
2. No other application is using port 3000
3. The `db.json` file exists in the root directory

### Build Errors
If you encounter build errors:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Clear Vite cache: `rm -rf node_modules/.vite`

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Author

FrontlinesEdutech Assignment

## 🤝 Contributing

This is an assignment project. For any suggestions or improvements, please feel free to reach out.

---

Built with ❤️ using React, Vite, and Tailwind CSS
