import React, { createContext, useContext, ReactNode } from 'react';

interface Config {
  primaryColor: string;
  logoUrl: string;
  companyName: string;
}

const ConfigContext = createContext<Config | undefined>(undefined);

interface ConfigProviderProps {
  config: Config;
  children: ReactNode;
}

export const ConfigProvider = ({ config, children }: ConfigProviderProps) => {
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = (): Config => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
