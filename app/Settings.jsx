import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>

            {/* Header */}
            <Text style={{ color: "black", fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
                Settings
            </Text>

            {/* Section: Achievements */}
            <TouchableOpacity style={styles.item}>
                <Icon name="star" type="font-awesome" color="orange" size={20} />
                <Text style={styles.itemText}>Achievements</Text>
            </TouchableOpacity>

            {/* Section: Backup & Restore */}
            <TouchableOpacity style={styles.item}>
                <Icon name="google" type="font-awesome" color="red" size={20} />
                <Text style={styles.itemText}>Backup & Restore</Text>
            </TouchableOpacity>

            {/* HOT Section */}
            <Text style={styles.sectionTitle}>HOT</Text>

            <TouchableOpacity style={styles.item}>
                <Icon name="ad" type="font-awesome-5" color="gray" size={20} />
                <Text style={styles.itemText}>Remove Ads</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <Icon name="info-circle" type="font-awesome" color="red" size={20} />
                <Text style={styles.itemText}>Instructions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <Icon name="widgets" type="material-icons" color="gray" size={20} />
                <Text style={styles.itemText}>Add Widget</Text>
            </TouchableOpacity>

            {/* Step Goal */}
            <TouchableOpacity style={styles.item}>
                <Icon name="flag-checkered" type="font-awesome" color="gray" size={20} />
                <Text style={styles.itemText}>Step Goal</Text>
                <Text style={styles.valueText}>6000</Text>
            </TouchableOpacity>

            {/* Target Weight */}
            <TouchableOpacity style={styles.item}>
                <Icon name="weight" type="font-awesome-5" color="gray" size={20} />
                <Text style={styles.itemText}>Target Weight</Text>
                <Text style={styles.valueText}>157 lbs</Text>
            </TouchableOpacity>

            {/* Water Tracker Settings */}
            <TouchableOpacity style={styles.item}>
                <Icon name="tint" type="font-awesome" color="gray" size={20} />
                <Text style={styles.itemText}>Water Tracker Settings</Text>
            </TouchableOpacity>

            {/* Sensitivity */}
            <TouchableOpacity style={styles.item}>
                <Icon name="sliders-h" type="font-awesome-5" color="gray" size={20} />
                <Text style={styles.itemText}>Sensitivity</Text>
                <Text style={styles.valueText}>Medium</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = {
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        marginVertical: 5,
    },
    itemText: {
        color: "black",
        fontSize: 16,
        flex: 1,
        marginLeft: 10,
    },
    valueText: {
        color: "red",
        fontSize: 16,
    },
    sectionTitle: {
        color: "gray",
        fontSize: 14,
        marginTop: 20,
        marginBottom: 10,
    },
};

export default SettingsScreen;
