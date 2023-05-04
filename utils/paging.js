const Paging = {
  exec: (pageInput, size, data) => {
    let length = data.length;
    const resData = [...data];
    let page = 1;
    if (pageInput > 0) page = pageInput;
    return {
      results: resData.splice(size * (page - 1), size),
      page: page,
      total_pages: Math.ceil(length / size),
    };
  },
};
module.exports = Paging;
