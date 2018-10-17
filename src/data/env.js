const env = process.env;

module.exports = {
    PCAP_PUBLIC_KEY: env.PCAP_PUBLIC_KEY,
    PCAP_PRIVATE_KEY: env.PCAP_PRIVATE_KEY,
    PCAP_RETRY_TIME: env.PCAP_RETRY_TIME || 5000,
    PCAP_LOOP_TIME: env.PCAP_LOOP_TIME || 60000,
};
