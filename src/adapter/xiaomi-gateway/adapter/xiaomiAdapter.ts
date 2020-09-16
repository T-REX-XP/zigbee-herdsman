/* istanbul ignore file */
/* eslint-disable */
import {
    NetworkOptions, SerialPortOptions, Coordinator, CoordinatorVersion, NodeDescriptor,
    DeviceType, ActiveEndpoints, SimpleDescriptor, LQI, RoutingTable, Backup as BackupType, NetworkParameters,
    StartResult, LQINeighbor, RoutingTableEntry, AdapterOptions,
} from '../../tstype';
import Debug from "debug";
import Adapter from '../../adapter';
const debug = Debug("zigbee-herdsman:deconz:adapter");
//import Driver from '../driver/driver';
import {ZclFrame, FrameType, Direction, Foundation} from '../../../zcl';
import * as Events from '../../events';
import * as Zcl from '../../../zcl';
import {GreenPowerEvents, GreenPowerDeviceJoinedPayload} from '../../../controller/tstype';
//import processFrame from '../driver/frameParser';
import {Queue, Waitress, Wait} from '../../../utils';
//import PARAM from '../driver/constants';
//import { Command, WaitForDataRequest, ApsDataRequest, ReceivedDataResponse, DataStateResponse, gpDataInd } from '../driver/constants';
class XiaomiAdapter extends Adapter {
    public start(): Promise<StartResult> {
        throw new Error("Method not implemented.");
    }
    public stop(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public getCoordinator(): Promise<Coordinator> {
        throw new Error("Method not implemented.");
    }
    public getCoordinatorVersion(): Promise<CoordinatorVersion> {
        throw new Error("Method not implemented.");
    }
    public reset(type: "soft" | "hard"): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public supportsLED(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    public setLED(enabled: boolean): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public supportsBackup(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    public backup(): Promise<BackupType> {
        throw new Error("Method not implemented.");
    }
    public getNetworkParameters(): Promise<NetworkParameters> {
        throw new Error("Method not implemented.");
    }
    public setTransmitPower(value: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public waitFor(networkAddress: number, endpoint: number, frameType: FrameType, direction: Direction, transactionSequenceNumber: number, clusterID: number, commandIdentifier: number, timeout: number): { promise: Promise<Events.ZclDataPayload>; cancel: () => void; } {
        throw new Error("Method not implemented.");
    }
    public permitJoin(seconds: number, networkAddress: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public lqi(networkAddress: number): Promise<LQI> {
        throw new Error("Method not implemented.");
    }
    public routingTable(networkAddress: number): Promise<RoutingTable> {
        throw new Error("Method not implemented.");
    }
    public nodeDescriptor(networkAddress: number): Promise<NodeDescriptor> {
        throw new Error("Method not implemented.");
    }
    public activeEndpoints(networkAddress: number): Promise<ActiveEndpoints> {
        throw new Error("Method not implemented.");
    }
    public simpleDescriptor(networkAddress: number, endpointID: number): Promise<SimpleDescriptor> {
        throw new Error("Method not implemented.");
    }
    public bind(destinationNetworkAddress: number, sourceIeeeAddress: string, sourceEndpoint: number, clusterID: number, destinationAddressOrGroup: string | number, type: "endpoint" | "group", destinationEndpoint?: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public unbind(destinationNetworkAddress: number, sourceIeeeAddress: string, sourceEndpoint: number, clusterID: number, destinationAddressOrGroup: string | number, type: "endpoint" | "group", destinationEndpoint: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public removeDevice(networkAddress: number, ieeeAddr: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public sendZclFrameToEndpoint(ieeeAddr: string, networkAddress: number, endpoint: number, zclFrame: ZclFrame, timeout: number, disableResponse: boolean, disableRecovery: boolean, sourceEndpoint?: number): Promise<Events.ZclDataPayload> {
        throw new Error("Method not implemented.");
    }
    public sendZclFrameToGroup(groupID: number, zclFrame: ZclFrame, sourceEndpoint?: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public sendZclFrameToAll(endpoint: number, zclFrame: ZclFrame, sourceEndpoint: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public setChannelInterPAN(channel: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public sendZclFrameInterPANToIeeeAddr(zclFrame: ZclFrame, ieeeAddress: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public sendZclFrameInterPANBroadcast(zclFrame: ZclFrame, timeout: number): Promise<Events.ZclDataPayload> {
        throw new Error("Method not implemented.");
    }
    public restoreChannelInterPAN(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
export default XiaomiAdapter;