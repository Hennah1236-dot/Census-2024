import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { addLocation, deleteLocation, getLocations, initializeDB, updateLocation, Location } from '@/database';


const CensusForm = () => {
  // State variables for each form field
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [llg, setLLG] = useState('');
    const [ward, setWard] = useState('');
    const [censusUnit, setCensusUnit] = useState('');
    const [censusUnitType, setCensusUnitType] = useState('');
    const [workloadNo, setWorkloadNo] = useState('');
    const [locality, setLocality] = useState('');
    const [section, setSection] = useState('');
    const [lot, setLot] = useState('');
    const [structureNo, setStructureNo] = useState('');
    const [pdNo, setPDNo] = useState('');
    const [householdNumber, setHouseholdNumber] = useState('');
    const [locations, setLocations] = useState<Location[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
    const [editingLocationId, setEditingLocationId] = useState<number | null>(null);

    // const handleSubmit = () => {
    //     // Handle form submission logic
    //     console.log({
    //     province,
    //     district,
    //     llg,
    //     ward,
    //     censusUnit,
    //     censusUnitType,
    //     workloadNo,
    //     locality,
    //     section,
    //     lot,
    //     structureNo,
    //     pdNo,
    //     householdNumber,
    //     });
    // };

    const fetchLocation = async () => {
        const allLocations = await getLocations();
        setLocations(allLocations)
    };

    useEffect(() => {
        const setupDatabase = async () => {
            await initializeDB();
            fetchLocation();
        };
        setupDatabase();
    }, []);

    const handleSubmit = async () => {
        if(
            !province ||
            !district ||
            !llg ||
            !ward ||
            !censusUnit ||
            !censusUnitType ||
            !workloadNo ||
            !locality ||
            !section ||
            !lot ||
            !structureNo ||
            !pdNo ||
            !householdNumber
        ) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
        try {
            if (editingLocationId) {
                await updateLocation(
                    editingLocationId,
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
                console.log('Location updated successfully');
            } else {
                const id = await addLocation(
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
                console.log("Location added with ID:", id);
            }
            resetForm();
            fetchLocation();
        } catch (error) {
            console.error("Error adding location:", error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteLocation(id);
            console.log("Location deleted successfully");
            fetchLocation();
        } catch (error) {
            console.error("Error deleting location:", error);
        }
    };

    const handleUpdateClick = (location: Location) => {
        // Populate the form with the selected location's data
        setProvince(location.province);
        setDistrict(location.district);         
        setLLG(location.llg);
        setWard(location.ward); 
        setCensusUnit(location.censusUnit); 
        setCensusUnitType(location.censusUnitType); 
        setWorkloadNo(location.workloadNo); 
        setLocality(location.locality); 
        setSection(location.section); 
        setLot(location.lot); 
        setStructureNo(location.structureNo); 
        setPDNo(location.pdNo); 
        setHouseholdNumber(location.householdNumber); 
        setEditingLocationId(location.id);
    };

    const resetForm = () => {
        setProvince('');
        setDistrict('');
        setLLG('');
        setWard('');
        setCensusUnit('');
        setCensusUnitType('');
        setWorkloadNo('');
        setLocality('');
        setSection('');
        setLot('');
        setStructureNo('');
        setPDNo('');
        setHouseholdNumber('');
        setEditingLocationId(null);
    }






    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Inductive Information</Text>

        <View style={styles.inputGroup}>
            <Text style={styles.label}>Province:</Text>
            <Picker
                selectedValue={province}
                style={styles.picker}
                onValueChange={(itemValue) => setProvince(itemValue)}
            >
                <Picker.Item label="Select an option" value="" />
                <Picker.Item label="Central Province" value="Central" />
                <Picker.Item label="Chimbu Province" value="Chimbu" />
                <Picker.Item label="Eastern Highlands Province" value="Eastern Highlands" />
                <Picker.Item label="East New Britain Province" value="East New Britain" />
                <Picker.Item label="East Sepik Province" value="East Sepik" />
                <Picker.Item label="Enga Province" value="Enga" />
                <Picker.Item label="Gulf Province" value="Gulf" />
                <Picker.Item label="Hela Province" value="Hela" />
                <Picker.Item label="Jiwaka Province" value="Jiwaka" />
                <Picker.Item label="Madang Province" value="Madang" />
                <Picker.Item label="Manus Province" value="Manus" />
                <Picker.Item label="Milne Bay Province" value="Milne Bay" />
                <Picker.Item label="Morobe Province" value="Morobe" />
                <Picker.Item label="National Capital District" value="National Capital District" />
                <Picker.Item label="New Ireland Province" value="New Ireland" />
                <Picker.Item label="Northern Province" value="Northern" />
                <Picker.Item label="North Solomons Province" value="North Solomons" />
                <Picker.Item label="Sanduan Province" value="Sanduan" />
                <Picker.Item label="Southern Highlands Province" value="Southern Highlands" />
                <Picker.Item label="Western Highlands Province" value="Western Highlands" />
                <Picker.Item label="Western Province" value="Western" />
                <Picker.Item label="West New Britain Province" value="West New Britain" />
            </Picker>
            </View>

        <TextInput
            style={styles.input}
            placeholder="Enter District"
            value={district}
            onChangeText={setDistrict}
        />

        <TextInput
            style={styles.input}
            placeholder="Enter LLG"
            value={llg}
            onChangeText={setLLG}
        />

        <TextInput
            style={styles.input}
            placeholder="Enter Ward"
            value={ward}
            onChangeText={setWard}
        />

        <TextInput
            style={styles.input}
            placeholder="Enter Census Unit"
            value={censusUnit}
            onChangeText={setCensusUnit}
        />

        <TextInput
            style={styles.input}
            placeholder="Enter Census Unit Type"
            value={censusUnitType}
            onChangeText={setCensusUnitType}
        />

        <TextInput
            style={styles.input}
            placeholder="Enter Workload No."
            value={workloadNo}
            onChangeText={setWorkloadNo}
        />

        <TextInput
            style={styles.input}
            placeholder="Enter Locality"
            value={locality}
            onChangeText={setLocality}
        />

        <TextInput
            style={styles.input}
            placeholder="Enter Section"
            value={section}
            onChangeText={setSection}
        />

        <TextInput
            style={styles.input}
            placeholder="Enter Lot"
            value={lot}
            onChangeText={setLot}
        />

        <TextInput
            style={styles.input}
            placeholder="Enter Structure No."
            value={structureNo}
            onChangeText={setStructureNo}
        />

        <TextInput
            style={styles.input}
            placeholder="Enter PD No."
            value={pdNo}
            onChangeText={setPDNo}
        />

        <TextInput
            style={styles.input}
            placeholder="Enter Household Number"
            value={householdNumber}
            onChangeText={setHouseholdNumber}
        />

        <Button title="Continue" onPress={handleSubmit} />

        {/* Table to display records */}
        <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Province</Text>
            <Text style={styles.tableHeaderText}>District</Text>
            <Text style={styles.tableHeaderText}>LLG</Text>
            <Text style={styles.tableHeaderText}>Ward</Text>
            <Text style={styles.tableHeaderText}>Census Unit</Text>
            <Text style={styles.tableHeaderText}>Census Unit Type</Text>
            <Text style={styles.tableHeaderText}>Workload No.</Text>
            <Text style={styles.tableHeaderText}>Locality</Text>
            <Text style={styles.tableHeaderText}>Section</Text>
            <Text style={styles.tableHeaderText}>Lot</Text>
            <Text style={styles.tableHeaderText}>Structure No.</Text>
            <Text style={styles.tableHeaderText}>PD No.</Text>
            <Text style={styles.tableHeaderText}>Household Number</Text>
            <Text style={styles.tableHeaderText}>Action</Text>
        </View>
        {locations.map((location) => (
            <View key={location.id} style={styles.tableRow}>
            <Text style={styles.tableRowText}>{location.province}</Text>
            <Text style={styles.tableRowText}>{location.district}</Text>
            <Text style={styles.tableRowText}>{location.llg}</Text>
            <Text style={styles.tableRowText}>{location.ward}</Text>
            <Text style={styles.tableRowText}>{location.censusUnit}</Text>
            <Text style={styles.tableRowText}>{location.censusUnitType}</Text>
            <Text style={styles.tableRowText}>{location.workloadNo}</Text>
            <Text style={styles.tableRowText}>{location.locality}</Text>
            <Text style={styles.tableRowText}>{location.section}</Text>
            <Text style={styles.tableRowText}>{location.lot}</Text>
            <Text style={styles.tableRowText}>{location.structureNo}</Text>
            <Text style={styles.tableRowText}>{location.pdNo}</Text>
            <Text style={styles.tableRowText}>{location.householdNumber}</Text>
            <View style={styles.actionButtons}>
                <TouchableOpacity
                style={styles.updateButton}
                onPress={() => handleUpdateClick(location)}
                >
                <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(location.id)}
                >
                <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
            </View>
        ))}
        </View>







        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#333',
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    picker: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        fontSize: 16,
        marginBottom: 20,
        borderColor: '#ccc',
        borderWidth: 1,
    },


    tableContainer: {
        marginTop: 20,
    },
    tableHeader: {
        flexDirection: "row",
        backgroundColor: "#f1f1f1",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    tableHeaderText: {
        flex: 1,
        fontWeight: "bold",
        textAlign: "center",
    },
    tableRow: {
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    tableRowText: {
        flex: 1,
        textAlign: "center",
    },
    actionButtons: {
        flexDirection: "row",
    },
    updateButton: {
        backgroundColor: "#4CAF50",
        padding: 5,
        borderRadius: 5,
        marginRight: 5,
    },
    deleteButton: { backgroundColor: "#F44336", padding: 5, borderRadius: 5 },
    buttonText: { color: "#fff", fontWeight: "bold" },
});

export default CensusForm;
