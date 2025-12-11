'use client';

import { AnalyticsView } from '@/components/studio/AnalyticsView';
import { DatasetView } from '@/components/studio/DatasetView';
import { ModelConfigView } from '@/components/studio/ModelConfigView';
import { PlaygroundView } from '@/components/studio/PlaygroundView';
import { TrainingView } from '@/components/studio/TrainingView';
import { useStudioStore } from '@/lib/store';

export default function StudioPage() {
    const { currentStep } = useStudioStore();

    const renderStep = () => {
        switch (currentStep) {
            case 'dataset':
                return <DatasetView />;
            case 'model':
                return <ModelConfigView />;
            case 'training':
                return <TrainingView />;
            case 'analytics':
                return <AnalyticsView />;
            case 'playground':
                return <PlaygroundView />;
            default:
                return <DatasetView />;
        }
    };

    return (
        <div style={{ paddingBottom: '4rem' }}>
            {renderStep()}
        </div>
    );
}
