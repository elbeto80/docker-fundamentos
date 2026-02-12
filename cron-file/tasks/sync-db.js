let times = 0;

const SyncDB = () => {
  times++;
  console.log("cambiando cada 5 segundos otro: ", times);

  return times;
};

module.exports = {
  SyncDB,
};
