type PublicEnvValues = ReturnType<typeof useRuntimeConfig>['public']

export const usePublicEnv = ():PublicEnvValues => {
  const config = useRuntimeConfig();

  return config.public;
}