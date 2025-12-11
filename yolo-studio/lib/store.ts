import { create } from 'zustand';

export type StudioStep = 'dataset' | 'model' | 'training' | 'analytics' | 'playground';

interface StudioState {
    currentStep: StudioStep;
    setStep: (step: StudioStep) => void;

    // Dataset State
    trainSplit: number; // 0-100
    setTrainSplit: (value: number) => void;
    uploadedFiles: File[];
    addFiles: (files: File[]) => void;

    // Model State
    modelSize: 'nano' | 'small' | 'medium' | 'large' | 'xlarge';
    setModelSize: (size: 'nano' | 'small' | 'medium' | 'large' | 'xlarge') => void;
    epochs: number;
    setEpochs: (epochs: number) => void;
    batchSize: number;
    setBatchSize: (batch: number) => void;
    device: 'cpu' | 'gpu';
    setDevice: (device: 'cpu' | 'gpu') => void;

    // Training State
    isTraining: boolean;
    progress: number; // 0-100
    currentEpoch: number;
    logs: string[];
    addLog: (log: string) => void;
    startTraining: () => void;
    stopTraining: () => void;
}

export const useStudioStore = create<StudioState>((set) => ({
    currentStep: 'dataset',
    setStep: (step) => set({ currentStep: step }),

    trainSplit: 80,
    setTrainSplit: (value) => set({ trainSplit: value }),
    uploadedFiles: [],
    addFiles: (files) => set((state) => ({ uploadedFiles: [...state.uploadedFiles, ...files] })),

    modelSize: 'nano',
    setModelSize: (size) => set({ modelSize: size }),
    epochs: 100,
    setEpochs: (epochs) => set({ epochs }),
    batchSize: 16,
    setBatchSize: (batchSize) => set({ batchSize }),
    device: 'gpu',
    setDevice: (device) => set({ device }),

    isTraining: false,
    progress: 0,
    currentEpoch: 0,
    logs: [],
    addLog: (log) => set((state) => ({ logs: [...state.logs, log] })),
    startTraining: () => set({ isTraining: true, logs: ['Initializing training environment...'] }),
    stopTraining: () => set({ isTraining: false }),
}));
