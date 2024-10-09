// lib_module/src/components/organismes/alert/Alert.tsx

import React, { useEffect } from 'react';
import '../../../assets/Alert.css'; 

// Types d'alertes
type AlertType = 'success' | 'error' | 'warning' | 'info';

// Définition des props du composant Alert
interface AlertProps {
  type: AlertType;
  message: string;
  autoClose?: boolean;
  autoCloseTime?: number; // en millisecondes
  onClose: () => void;
}

// Composant Alert
const Alert: React.FC<AlertProps> = ({
  type,
  message,
  autoClose,
  autoCloseTime = 5000, // Par défaut 5 secondes
  onClose,
}) => {
  // Gestion de la fermeture automatique
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(onClose, autoCloseTime);
      return () => clearTimeout(timer); // Nettoyer le timer lors du démontage
    }
  }, [autoClose, autoCloseTime, onClose]);

  // Fonction pour obtenir les classes CSS en fonction du type d'alerte
  const getAlertClass = () => {
    switch (type) {
      case 'success':
        return 'alert-success';
      case 'error':
        return 'alert-error';
      case 'warning':
        return 'alert-warning';
      case 'info':
        return 'alert-info';
      default:
        return '';
    }
  };

  return (
    <div className={`alert ${getAlertClass()}`}>
      <span>{message}</span>
      <button className="alert-close-btn" onClick={onClose}>
        &times; {/* Symbole pour fermer */}
      </button>
    </div>
  );
};

export default Alert;
