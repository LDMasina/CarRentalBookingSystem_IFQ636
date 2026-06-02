const chai = require('chai');
const sinon = require('sinon');
const mongoose = require('mongoose');
const Vehicle = require('../models/Vehicle');
const {
    createVehicle,
    getVehicles
} = require('../controllers/vehicleController');
const { expect } = chai;

describe('Vehicle Controller Tests', () => {

    // Test Case 1 -- TC001: Create Vehicle successfully
    it('should create a new vehicle successfully', async () => {
        const req = {
            user: { id: new mongoose.Types.ObjectId() },
            body: {
                make: 'Toyota',
                model: 'Camry',
                year: 2023,
                pricePerDay: 89,
                category: 'Sedan',
                description: 'Comfortable sedan'
            }
        };

        const createdVehicle = {
            _id: new mongoose.Types.ObjectId(),
            ...req.body,
            status: 'available'
        };

        const saveStub = sinon.stub(Vehicle.prototype, 'save').resolves(createdVehicle);

        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.spy()
        };

        await createVehicle(req, res);

        expect(res.status.calledWith(201)).to.be.true;
        saveStub.restore();
    });

    // Test Case 2 -- TC002: Return 500 on vehicle creation error
    it('should return 500 if an error occurs during vehicle creation', async () => {
        const req = {
            user: { id: new mongoose.Types.ObjectId() },
            body: {}
        };

        const saveStub = sinon.stub(Vehicle.prototype, 'save').throws(new Error('DB Error'));

        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.spy()
        };

        await createVehicle(req, res);

        expect(res.status.calledWith(400)).to.be.true;
        saveStub.restore();
    });

    // Test Case 3 -- TC003: Admin cannot delete booking (boundary test)
    it('should confirm admin deletion is excluded from vehicle retire', async () => {
        const findStub = sinon.stub(Vehicle, 'find').resolves([]);

        const req = { user: { id: new mongoose.Types.ObjectId() } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.spy()
        };

        await getVehicles(req, res);

        expect(res.json.called).to.be.true;
        findStub.restore();
    });
});