# ImpactTech Student Management System

A comprehensive student management system for ImpactTech Coding Academy, built with Python and Tkinter.

## Features

- Student Registration
- Programme Management
- Payment Tracking
- Student Profiles
- Payment History
- Automated Notifications
- Report Generation
- Admission Letter Generation

## Prerequisites

- Windows 10 or later
- Python 3.11 or later
- Required Python packages (installed automatically)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ImpactConnect/SMgt-Final.git
cd SMgt-Final
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Application

### Development Mode
Run directly with Python:
```bash
python main.py
```

### Production Mode
Build and run the executable:

1. Run the build script:
```bash
.\build_windows.bat
```

2. Find the executable in the `dist` folder:
```
dist/ImpactTech_StudentMgt.exe
```

## Project Structure

```
SMgt-Final/
├── main.py              # Main application entry point
├── database/            # Database setup and migrations
├── pages/              # Application pages/views
├── utils/              # Utility functions and constants
├── components/         # Reusable UI components
└── requirements.txt    # Python dependencies
```

## Features in Detail

### Student Registration
- Capture student details
- Generate unique registration numbers
- Create admission letters automatically

### Programme Management
- Add/Edit programmes
- Set programme durations
- Manage class schedules

### Payment Tracking
- Record student payments
- Generate payment receipts
- Track payment history
- Payment reminder notifications

## Configuration

The application automatically creates necessary folders in the user's Documents directory:
- `Impactech/database` - Database files
- `Impactech/exports` - Generated documents
- `Impactech/logs` - Application logs

## Troubleshooting

1. If the application fails to start:
   - Check the logs in `Documents/Impactech/logs`
   - Ensure all dependencies are installed
   - Verify Python version compatibility

2. Database issues:
   - Check database connection in settings
   - Ensure write permissions in database directory

## Support

For support, please contact:
- Email: info@impacttech-solutions.com
- Phone: 07032196863

## Authors

- ImpactConnect
- ImpactTech Coding Academy

## License

Copyright © 2024 ImpactTech Coding Academy. All rights reserved. 