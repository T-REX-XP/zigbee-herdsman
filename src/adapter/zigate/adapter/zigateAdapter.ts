/* istanbul ignore file */
/* eslint-disable */
import {
    AdapterOptions,
    Coordinator,
    CoordinatorVersion,
    NetworkOptions,
    SerialPortOptions,
    StartResult,
} from '../../tstype';
import Debug from "debug";
import Adapter from '../../adapter';
import {Direction, FrameType, ZclFrame} from '../../../zcl';
import * as Events from '../../events';
import {Queue} from '../../../utils';
// @ts-ignore
import Driver from 'node-zigate/src/driver/driver.js';
import * as TsType from "zigbee-herdsman/src/adapter/tstype";
import {ZclDataPayload} from "zigbee-herdsman/src/adapter/events";

const debug = Debug("zigbee-herdsman:deconz:adapter");


class ZigateAdapter extends Adapter {
    private driver: Driver;
    private queue: Queue;
    private transactionID: number;
    private joinPermitted: boolean;
    private fwVersion: CoordinatorVersion;

    public constructor(networkOptions: NetworkOptions,
                       serialPortOptions: SerialPortOptions, backupPath: string, adapterOptions: AdapterOptions) {

        super(networkOptions, serialPortOptions, backupPath, adapterOptions);

        this.driver = new Driver({log: 'console'});
        this.driver.open(serialPortOptions.path)
            .then(() => {
                console.log("well connected to zigate key.");
            })
            .catch(() => {
                console.error("error while connecting to zigate key: ");
            });
        this.driver.on('response', (response: { type: { name: string; }; address: any; ieee: any; }) => {

            console.log('response received: ' + JSON.stringify(response.type));

            if (response.type.name === 'device_announce') {

                const payload: Events.DeviceJoinedPayload = {
                    networkAddress: response.address,
                    ieeeAddr: response.ieee,
                };
                console.log(response.type.name + ' sss');

                this.emit(Events.Events.deviceJoined, payload);
                this.emit(Events.Events.deviceAnnounce, payload);
            } else if (response.type.name === 'device_remove') {

                console.log(response.type.name + ' sss');
                const payload: Events.DeviceLeavePayload = {
                    networkAddress: response.ieee,
                    ieeeAddr: response.ieee,
                };

                this.emit(Events.Events.deviceLeave, payload);

            }
        });


    }

    public static async isValidPath(path: string): Promise<boolean> {
        return;
    }

    public static async autoDetectPath(): Promise<string> {
        return;
    }

    /**
     * Adapter methods
     */
    public async start(): Promise<StartResult> {

        return;
    }

    public async stop(): Promise<void> {
        this.driver.close();
    }

    public async getCoordinator(): Promise<Coordinator> {

        const endpoints: any = [{
            ID: 0x01,
            profileID: 0x0104,
            deviceID: 0x0005,
            inputClusters: [0x0019, 0x000A],
            outputClusters: [0x0500]
        },
            {
                ID: 0xF2,
                profileID: 0xA1E0,
                deviceID: 0x0064,
                inputClusters: [],
                outputClusters: [0x0021]
            }];
        return {
            ieeeAddr: "null",
            networkAddress: 0,
            manufacturerID: 0x1135,
            endpoints,
        };

    };

    public getCoordinatorVersion(): Promise<TsType.CoordinatorVersion> {
        return this.driver.version;
    };

    public reset(type: 'soft' | 'hard'): Promise<void> {
        return
    };

    public supportsLED(): Promise<boolean> {
        return
    };

    public setLED(enabled: boolean): Promise<void> {
        return
    };

    public supportsBackup(): Promise<boolean> {
        return
    };

    public backup(): Promise<TsType.Backup> {
        return
    };

    public getNetworkParameters(): Promise<TsType.NetworkParameters> {
        return
    };

    public setTransmitPower(value: number): Promise<void> {
        return
    };

    public waitFor(
        networkAddress: number, endpoint: number, frameType: FrameType, direction: Direction,
        transactionSequenceNumber: number, clusterID: number, commandIdentifier: number, timeout: number,
    ): { promise: Promise<ZclDataPayload>; cancel: () => void } {
        return
    };

    /**
     * ZDO
     */

    public permitJoin(seconds: number, networkAddress: number): Promise<void> {
        return this.driver.send('permit_join', {duration: seconds, address: networkAddress});
    };

    public lqi(networkAddress: number): Promise<TsType.LQI> {
        console.log('lqi')
        return
    };

    public routingTable(networkAddress: number): Promise<TsType.RoutingTable> {
        console.log('RoutingTable')
        return
    };

    public nodeDescriptor(networkAddress: number): Promise<TsType.NodeDescriptor> {
        return
    };

    public activeEndpoints(networkAddress: number): Promise<TsType.ActiveEndpoints> {
        return
    };

    public simpleDescriptor(networkAddress: number, endpointID: number): Promise<TsType.SimpleDescriptor> {
        return
    };

    public bind(
        destinationNetworkAddress: number, sourceIeeeAddress: string, sourceEndpoint: number,
        clusterID: number, destinationAddressOrGroup: string | number, type: 'endpoint' | 'group',
        destinationEndpoint?: number
    ): Promise<void> {
        return
    };

    public unbind(
        destinationNetworkAddress: number, sourceIeeeAddress: string, sourceEndpoint: number,
        clusterID: number, destinationAddressOrGroup: string | number, type: 'endpoint' | 'group',
        destinationEndpoint: number
    ): Promise<void> {
        return
    };

    public removeDevice(networkAddress: number, ieeeAddr: string): Promise<void> {
        return
    };

    /**
     * ZCL
     */

    public sendZclFrameToEndpoint(
        ieeeAddr: string, networkAddress: number, endpoint: number, zclFrame: ZclFrame, timeout: number,
        disableResponse: boolean, disableRecovery: boolean, sourceEndpoint?: number,
    ): Promise<ZclDataPayload> {
        return
    };

    public sendZclFrameToGroup(groupID: number, zclFrame: ZclFrame, sourceEndpoint?: number): Promise<void> {
        return
    };

    public sendZclFrameToAll(endpoint: number, zclFrame: ZclFrame, sourceEndpoint: number): Promise<void> {
        return
    };

    /**
     * InterPAN
     */

    public setChannelInterPAN(channel: number): Promise<void> {
        return
    };

    public sendZclFrameInterPANToIeeeAddr(zclFrame: ZclFrame, ieeeAddress: string): Promise<void> {
        return
    };

    public sendZclFrameInterPANBroadcast(
        zclFrame: ZclFrame, timeout: number
    ): Promise<ZclDataPayload> {
        return
    };

    public restoreChannelInterPAN(): Promise<void> {
        return
    };

}


export default ZigateAdapter;
