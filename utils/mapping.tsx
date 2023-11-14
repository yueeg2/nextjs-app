'use client';
import { type BackupStatus, type RollBackStatus } from '@/components/Chip/ChipProps';

export const mapStatus = (rawStatus: BackupStatus | RollBackStatus) => {
  if (rawStatus === 'OK') {
    return 'success';
  }
  if (rawStatus === 'FAILED') {
    return 'failed';
  }
  if (rawStatus === 'RESTORING') {
    return 'processing';
  }
  if (rawStatus === 'RUNNING') {
    return 'processing';
  }
  if (rawStatus === 'SAVING') {
    return 'saving';
  }
  if (rawStatus === 'AVAILABLE') {
    return 'available';
  }
  return '';
};
export const mapStatusText = (rawStatus: BackupStatus | RollBackStatus) => {
  if (rawStatus === 'OK') {
    return '完成';
  }
  if (rawStatus === 'FAILED') {
    return '失敗';
  }
  if( rawStatus === 'SAVING'){
    return '備份中';
  }
  if (rawStatus === 'RESTORING') {
    return '導回中';
  }
  if (rawStatus === 'RUNNING') {
    return '備份中';
  }
  if (rawStatus === 'SAVING') {
    return '備份中';
  }
  if (rawStatus === 'AVAILABLE') {
    return '可導回';
  }
  return  '';

};
