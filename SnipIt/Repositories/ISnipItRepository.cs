﻿using CodeSnipIt.Models;
using System.Collections.Generic;

namespace CodeSnipIt.Repositories
{
    public interface ISnipItRepository
    {
        List<SnipIt> GetAllSnipIts();
    }
}