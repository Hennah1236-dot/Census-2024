import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabaseSync('census');
export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    date: string; // Consider using a Date type depending on your date format
    gender: string;
}

export interface Location {
    id: number;
    province: string;
    district: string;
    llg: string;
    ward: string;
    censusUnit: string;
    censusUnitType: string;
    workloadNo: string;
    locality: string;
    section: string;
    lot: string;
    structureNo: string;
    pdNo: string;
    householdNumber: string;
}

export interface Census {
    id: number;
    name: string;
    surname: string;
    relationship: string;
    maritalStatus: string;
    gender: string;
    dob: string;
    citizenship: string;
    nonPngCitizenDetail: string;
}


export const initializeDB = async () => {
    await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS person (
            id INTEGER PRIMARY KEY NOT NULL,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            phone TEXT NOT NULL,
            email TEXT NOT NULL,
            date TEXT NOT NULL,
            gender TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS location (
            id INTEGER PRIMARY KEY NOT NULL,
            province TEXT NOT NULL,
            district TEXT NOT NULL,
            llg TEXT NOT NULL,
            ward TEXT NOT NULL,
            censusUnit TEXT NOT NULL,            
            censusUnitType TEXT NOT NULL,
            workloadNo TEXT NOT NULL,
            locality TEXT NOT NULL,
            section TEXT NOT NULL,
            lot TEXT NOT NULL,
            structureNo TEXT NOT NULL,
            pdNo TEXT NOT NULL,
            householdNumber TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS census (
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT NOT NULL,
            surname TEXT NOT NULL,
            relationship TEXT NOT NULL,
            maritalStatus TEXT NOT NULL,
            gender TEXT NOT NULL,
            dob TEXT NOT NULL,
            citizenship TEXT NOT NULL,
            nonPngCitizenDetail TEXT NOT NULL
        );
    `);
};

// PERSONAL INFO
export const addPerson = async (firstName: string, lastName: string, phone:
    string, email: string, date: string, gender: string) => {
    try {
    const result = await db.runAsync('INSERT INTO person (firstName, lastName, phone, email, date, gender) VALUES (?, ?, ?, ?, ?, ?)', firstName, lastName,
    phone, email, date, gender);
    return result.lastInsertRowId;
} catch (error) {
    console.error("Error adding person:", error);
    }
};
export const updatePerson = async (id: number, firstName: string, lastName:
    string, phone: string, email: string, date: string, gender: string) => {
    try {
    await db.runAsync('UPDATE person SET firstName = ?, lastName = ?, phone = ?, email = ?, date = ?, gender = ? WHERE id = ?', firstName, lastName, phone,
    email, date, gender, id);
    } catch (error) {
    console.error("Error updating person:", error);
    }
};

export const deletePerson = async (id: number) => {
    try {
    await db.runAsync('DELETE FROM person WHERE id = ?', id);
    } catch (error) {
    console.error("Error deleting person:", error);
    }
};
export const getPersons = async () => {
    try {
    const allRows = await db.getAllAsync('SELECT * FROM person') as Person[];
    return allRows;
    }catch (error) {
    console.error("Error getting persons:", error);
    return [];
    }
};

// INDUCTIVE INFORMATION
export const addLocation = async (
    province: string, 
    district: string,
    llg: string, 
    ward: string, 
    censusUnit: string, 
    censusUnitType: string,
    workloadNo: string, 
    locality: string, 
    section: string, 
    lot: string, 
    structureNo: string, 
    pdNo: string, 
    householdNumber: string
) => {
    try {
        const result = await db.runAsync('INSERT INTO location (province, district, llg, ward, censusUnit, censusUnitType, workloadNo, locality, section, lot, structureNo, pdNo, householdNumber) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            province, 
            district,
            llg, 
            ward, 
            censusUnit, 
            censusUnitType, 
            workloadNo, 
            locality, 
            section, 
            lot, 
            structureNo, 
            pdNo,
            householdNumber
        );
        return result.lastInsertRowId;
    } catch (error) {
        console.error("Error adding location:", error);
    }
};

export const updateLocation = async (
    id: number, 
    province: string, 
    district: string, 
    llg: string, 
    ward: string, 
    censusUnit: string, 
    censusUnitType: string, 
    workloadNo: string, 
    locality: string, 
    section: string, 
    lot: string, 
    structureNo: string, 
    pdNo: string, 
    householdNumber: string
) => {
    try {
        await db.runAsync('UPDATE location SET province = ?, district = ?, llg = ?, ward = ?, censusUnit = ?, censusUnitType = ?, workloadNo = ?, locality = ?, section = ?, lot = ?, structureNo = ?, pdNo = ?, householdNumber = ? WHERE id = ?', 
            province, 
            district, 
            llg, 
            ward, 
            censusUnit, 
            censusUnitType, 
            workloadNo, 
            locality, 
            section, 
            lot, 
            structureNo, 
            pdNo, 
            householdNumber, 
            id
        );     
    } catch (error) {
        console.error("Error updating location:", error);
    }
};

export const deleteLocation = async (id: number) => {
    try {
    await db.runAsync('DELETE FROM location WHERE id = ?', id);
    } catch (error) {
    console.error("Error deleting location:", error);
    }
};

export const getLocations = async () => {
    try {
    const allRows = await db.getAllAsync('SELECT * FROM location') as Location[];
    return allRows;
    }catch (error) {
    console.error("Error getting locations:", error);
    return [];
    }
};

// PERSONAL INFORMATION
export const addCensus = async (
    name: string, 
    surname: string, 
    relationship: string, 
    maritalStatus: string, 
    gender: string, 
    dob: string, 
    citizenship: string, 
    nonPngCitizenDetail: string
) => {
    try {
        const result = await db.runAsync('INSERT INTO census (name, surname, relationship, maritalStatus, gender, dob, citizenship, nonPngCitizenDetail) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
            name, 
            surname, 
            relationship, 
            maritalStatus, 
            gender, 
            dob, 
            citizenship, 
            nonPngCitizenDetail
        );
        return result.lastInsertRowId;
    } catch (error) {
        console.error("Error adding census:", error);
    }
};

export const updateCensus = async (
    id: number, 
    name: string, 
    surname: string, 
    relationship: string, 
    maritalStatus: string, 
    gender: string, 
    dob: string, 
    citizenship: string, 
    nonPngCitizenDetail: string
) => {
    try {
        await db.runAsync('UPDATE census SET name = ?, surname = ?, relationship = ?, maritalStatus = ?, gender = ?, dob = ?, citizenship = ?, nonPngCitizenDetail = ? WHERE id = ?', 
            name, 
            surname, 
            relationship, 
            maritalStatus, 
            gender, 
            dob, 
            citizenship, 
            nonPngCitizenDetail, 
            id
        );     
    } catch (error) {
        console.error("Error updating census:", error);
    }
};

export const deleteCensus = async (id: number) => { 
    try {
    await db.runAsync('DELETE FROM census WHERE id = ?', id);
    } catch (error) {
    console.error("Error deleting census:", error); 
    }
};

export const getCensus = async () => {
    try {
    const allRows = await db.getAllAsync('SELECT * FROM census') as Census[];
    return allRows;
    }catch (error) {
    console.error("Error getting census:", error);
    return [];
    }
};