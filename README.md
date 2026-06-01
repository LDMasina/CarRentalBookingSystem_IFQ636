# CarRentalBookingSystem_IFQ636
## By Lance Masina

A web-based automotive-hire marketplace extending the nahaQUT sample application 
(IFQ636 Unit Coordinator, 2026). Built on Node.js, React.js, and MongoDB Atlas, 
the system implements four CRUD entities: Vehicle, Booking, VehicleCategory, and Review, 
with role-differentiated access for Customer and Administrator actors.

---

## Public URL

| Service | URL |
|---|---|
| Backend API | http://52.64.241.90:5001 |
| Frontend | http://52.64.241.90:3000 |

---

## Test Credentials

| Role | Email | Password |
|---|---|---|
| Customer | customer@carrentals.com | Customer123 |
| Administrator | admin@carrentals.com | Admin123 |

If test accounts are not seeded, register via `/register`. To provision an 
administrator account, set the `role` field to `admin` directly in MongoDB Atlas 
Database Access.

---

## Local Setup

### Prerequisites

- Node.js v18 or higher
- npm
- MongoDB Atlas cluster with a database user configured
- Git

### Clone

```bash
git clone https://github.com/LDMasina/CarRentalBookingSystem_IFQ636.git
cd CarRentalBookingSystem_IFQ636
```

### Backend

```bash
cd backend
cp .env.example .env
# Populate .env with MONGO_URI, JWT_SECRET, PORT, NODE_ENV
npm install
node server.js
```

### Frontend

```bash
cd frontend
npm install
npm start
```

### Environment variables

MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
JWT_SECRET=your_jwt_secret
PORT=5001
NODE_ENV=development

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js v18 |
| Frontend | React.js |
| Database | MongoDB Atlas |
| CI/CD | GitHub Actions |
| Deployment | AWS EC2 (t2.micro, Ubuntu 26.04) |
| Process manager | pm2 |

---

## Repository

https://github.com/LDMasina/CarRentalBookingSystem_IFQ636

## Jira Board

https://lancemasina-qut.atlassian.net/jira/software/projects/CRBS/boards/34/backlog?atlOrigin=eyJpIjoiNDMwOGVmNTA3ZWU0NDE2ZDkwOWMwMGNjZmM4MDc1OGIiLCJwIjoiaiJ9

## References

Cited references are included in some of thwe inline commentary of the code using APA Style referencing. Full References list provided in Assigment template that has been submitted via Canvas.

---

**GitHub link of the starter project: **[https://github.com/nahaQUT/sampleapp_IFQ636.git](https://github.com/nahaQUT/sampleapp_IFQ636.git)

---

